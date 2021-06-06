#include <SoftwareSerial.h>
#define DEBUG true
#define RX 2
#define TX 3
SoftwareSerial esp8266(RX,TX);

//CHANGE THESE NETWORK SETTINGS
String HOST = "liquidgalaxy.cf";
String AP = "ssid";
String PASS = "password";

//PROCESSING VARIABLES
String req="";
int countTrueCommand;
int countTimeCommand;
boolean found = false;

void setup() {
  Serial.begin(9600);
  
  //ESTABLISH CONNECTION WITH MASTER
  esp8266.begin(115200);
}  
void loop() {
  req="GET /upload-waterdata.php?sea=Bay%20of%20Bengal&lon="+String(random(180))+"E&lat="+String(random(180))+"N&stemp="+String(random(200,300))+"K&atemp="+String(random(200,300))+"K&hum="+String(random(80,100))+"%&slp="+String(random(101024,102690))+"Pa&ph="+String(random(0,14))+"&tds="+String(random(600,900))+"mgl&rkt=LG%20Rocket%202FA";
  espCommand("AT+CIPSTART=\"TCP\",\""+ HOST +"\",80",1,"OK");
  espCommand("AT+CIPSEND="+String(req.length()+4),1,">");
  Serial.print(req);
  esp8266.println(req);
  esp8266.println("AT+CIPCLOSE");
}

//SENDING COMMANDS TO ESP8266
void espCommand(String command, int maxTime, char readReplay[]) {

Serial.print(countTrueCommand);
Serial.print(". at command => ");
Serial.print(command);
Serial.print(" ");
while(countTimeCommand < (maxTime*1))

{

esp8266.println(command);//at+cipsend
if(esp8266.find(readReplay))//ok
{

found = true;
break;

}
countTimeCommand++;

}
if(found == true)
{

Serial.println("PASS");

countTrueCommand++;
countTimeCommand = 0;

}
if(found == false)
{

Serial.println("Fail");
countTrueCommand = 0;
countTimeCommand = 0;

}
found = false;

}
