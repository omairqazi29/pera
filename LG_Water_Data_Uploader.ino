/*
 * P.E.R.A. water telemetry uploader
 *
 * Arduino sketch that drives an ESP8266 running AT firmware over SoftwareSerial.
 * Each loop builds one HTTP GET and posts it to dashboard/upload-waterdata.php.
 *
 * Query parameter names must stay aligned with that PHP endpoint:
 *   sea, lon, lat, stemp, atemp, hum, slp, ph, tds, rkt
 *
 * DEMO_MODE defaults to true so a freshly flashed board sends simulated
 * readings and does not require sensors. Set it to false only after the
 * readSensor*() stubs are wired to real hardware.
 *
 * Do not commit real Wi-Fi credentials. Edit the constants below locally.
 */

#include <SoftwareSerial.h>

// ---------------------------------------------------------------------------
// Network configuration. Replace the placeholders before field use.
// SSID and password must not contain double quotes (they are placed in an
// AT+CWJAP command). HOST is a hostname only, with no scheme or path.
// ---------------------------------------------------------------------------
static const char HOST[] = "your-dashboard-host.example";
static const int HOST_PORT = 80;
// If the dashboard is not the web root, use "/dashboard/upload-waterdata.php".
static const char UPLOAD_PATH[] = "/upload-waterdata.php";
static const char WIFI_SSID[] = "your-ssid";
static const char WIFI_PASS[] = "your-wifi-password";

// How long to wait between uploads, in milliseconds.
static const unsigned long UPLOAD_INTERVAL_MS = 15000;

// true  = simulated readings (safe default)
// false = readSensor*() stubs below
static const bool DEMO_MODE = true;

// ESP8266 AT firmware baud. SoftwareSerial on an Uno is unreliable at 115200;
// if joins fail, set the ESP to 9600 and change this constant to match.
static const long ESP_BAUD = 115200;

#define RX 2
#define TX 3

SoftwareSerial esp8266(RX, TX);

int countTrueCommand;
int countTimeCommand;
boolean found = false;

// ---------------------------------------------------------------------------
// Sensor stubs. Used only when DEMO_MODE is false.
// Replace each body with a real driver (GPS, thermometer, humidity, pressure,
// pH, TDS). Keep the same string shapes the dashboard validator accepts:
//   lon/lat  decimal degrees, optional E/W or N/S suffix (lat within +/-90)
//   stemp/atemp  number plus optional K, C, or F
//   hum      0-100 plus optional %
//   slp      pascals (80000-120000) or hPa/mb (800-1200)
//   ph       0-14
//   tds      number plus optional mgl, mg/l, or ppm
// ---------------------------------------------------------------------------
String readSeaName() {
  return "Bay of Bengal"; // Label for the body of water, not an electronic sensor.
}

String readLongitude() {
  // TODO: return GPS longitude, for example "88.36E" or "-88.36".
  return "88.36E";
}

String readLatitude() {
  // TODO: return GPS latitude, for example "21.45N" or "21.45".
  return "21.45N";
}

String readSurfaceTemp() {
  // TODO: return the surface-temperature sensor reading, for example "299K".
  return "299K";
}

String readAirTemp() {
  // TODO: return the air-temperature sensor reading, for example "301K".
  return "301K";
}

String readHumidity() {
  // TODO: return relative humidity, for example "82%".
  return "82%";
}

String readSeaLevelPressure() {
  // TODO: return sea-level pressure, for example "101325Pa".
  return "101325Pa";
}

String readPh() {
  // TODO: return the pH probe reading, for example "7.8".
  return "7.8";
}

String readTds() {
  // TODO: return total dissolved solids, for example "740mgl".
  return "740mgl";
}

String readRocketId() {
  return "LG Rocket 2FA";
}

boolean isUnreserved(char c) {
  if (c >= 'A' && c <= 'Z') return true;
  if (c >= 'a' && c <= 'z') return true;
  if (c >= '0' && c <= '9') return true;
  return c == '-' || c == '_' || c == '.' || c == '~';
}

String urlEncode(const String& value) {
  const char* hex = "0123456789ABCDEF";
  String encoded;
  encoded.reserve(value.length() * 3);
  for (unsigned int i = 0; i < value.length(); i++) {
    char c = value.charAt(i);
    if (isUnreserved(c)) {
      encoded += c;
    } else {
      encoded += '%';
      encoded += hex[(c >> 4) & 0x0F];
      encoded += hex[c & 0x0F];
    }
  }
  return encoded;
}

// Builds the full HTTP/1.1 request, including headers. Parameter names match
// dashboard/upload-waterdata.php. In DEMO_MODE the numeric fields are random
// stand-ins; otherwise the sensor stubs above are called.
String buildTelemetryRequest() {
  String sea;
  String lon;
  String lat;
  String stemp;
  String atemp;
  String hum;
  String slp;
  String ph;
  String tds;
  String rkt;

  if (DEMO_MODE) {
    sea = "Bay of Bengal";
    lon = String(random(0, 180)) + "E";
    lat = String(random(0, 91)) + "N"; // 0..90, which the dashboard accepts
    stemp = String(random(200, 300)) + "K";
    atemp = String(random(200, 300)) + "K";
    hum = String(random(80, 101)) + "%";
    slp = String(random(101024, 102690)) + "Pa";
    ph = String(random(0, 15)); // 0..14
    tds = String(random(600, 900)) + "mgl";
    rkt = "LG Rocket 2FA";
  } else {
    sea = readSeaName();
    lon = readLongitude();
    lat = readLatitude();
    stemp = readSurfaceTemp();
    atemp = readAirTemp();
    hum = readHumidity();
    slp = readSeaLevelPressure();
    ph = readPh();
    tds = readTds();
    rkt = readRocketId();
  }

  String query = String("sea=") + urlEncode(sea)
    + "&lon=" + urlEncode(lon)
    + "&lat=" + urlEncode(lat)
    + "&stemp=" + urlEncode(stemp)
    + "&atemp=" + urlEncode(atemp)
    + "&hum=" + urlEncode(hum)
    + "&slp=" + urlEncode(slp)
    + "&ph=" + urlEncode(ph)
    + "&tds=" + urlEncode(tds)
    + "&rkt=" + urlEncode(rkt);

  String request = String("GET ") + UPLOAD_PATH + "?" + query + " HTTP/1.1\r\n";
  request += String("Host: ") + HOST + "\r\n";
  request += "Connection: close\r\n";
  request += "\r\n";
  return request;
}

// Send one AT command and wait until `readReplay` shows up or maxTime
// attempts have elapsed. esp8266.find() blocks on its own timeout, so
// maxTime is a retry count, not a precise number of seconds.
// Returns true when the expected token was seen.
boolean espCommand(String command, int maxTime, char readReplay[]) {
  Serial.print(countTrueCommand);
  Serial.print(". at command => ");
  Serial.print(command);
  Serial.print(" ");

  while (countTimeCommand < maxTime) {
    esp8266.println(command);
    if (esp8266.find(readReplay)) {
      found = true;
      break;
    }
    countTimeCommand++;
  }

  if (found) {
    Serial.println("PASS");
    countTrueCommand++;
    countTimeCommand = 0;
  } else {
    Serial.println("Fail");
    countTrueCommand = 0;
    countTimeCommand = 0;
  }

  boolean passed = found;
  found = false;
  return passed;
}

// Station-mode join. Order matters: ping the module, leave soft-AP mode,
// join the configured network, then force a single TCP connection so the
// later CIPSTART / CIPSEND sequence stays simple.
void connectWifi() {
  espCommand("AT", 5, "OK");
  espCommand("AT+CWMODE=1", 5, "OK");
  String join = String("AT+CWJAP=\"") + WIFI_SSID + "\",\"" + WIFI_PASS + "\"";
  espCommand(join, 20, "OK");
  espCommand("AT+CIPMUX=0", 5, "OK");
}

void setup() {
  Serial.begin(9600);
  esp8266.begin(ESP_BAUD);
  delay(1000);

  Serial.println("P.E.R.A. water uploader starting");
  if (DEMO_MODE) {
    randomSeed(analogRead(A0));
    Serial.println("DEMO_MODE is on; readings are simulated.");
  } else {
    Serial.println("DEMO_MODE is off; using sensor stubs.");
  }

  connectWifi();
}

void loop() {
  String req = buildTelemetryRequest();

  // Open a TCP socket, announce the exact body length, then write the HTTP
  // request with print() so we do not append an extra blank line beyond the
  // headers already inside `req`.
  String start = String("AT+CIPSTART=\"TCP\",\"") + HOST + "\"," + String(HOST_PORT);
  boolean connected = espCommand(start, 10, "OK");
  if (connected) {
    boolean prompt = espCommand("AT+CIPSEND=" + String(req.length()), 5, ">");
    if (prompt) {
      Serial.println(req);
      esp8266.print(req);
      delay(1000);
    }
    espCommand("AT+CIPCLOSE", 5, "OK");
  }

  delay(UPLOAD_INTERVAL_MS);
}
