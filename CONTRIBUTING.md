# Contributing

Small, focused changes are welcome. Keep the existing PHP template and Arduino sketch; do not replace them with another framework.

## Requirements

- PHP 7.4 or newer with the `mysqli` extension. PHP 8.x is fine. The dashboard forces `mysqli_report(MYSQLI_REPORT_OFF)` so existing `if ($stmt = mysqli_prepare(...))` checks keep working.
- MySQL 5.7+ or MariaDB, `utf8mb4`.
- A web server with the document root at `dashboard/`, or an equivalent alias. The sketch's default path is `/upload-waterdata.php`.
- Arduino IDE. The sketch uses `SoftwareSerial` (included with the IDE) to talk to an ESP8266 running AT firmware.

No Composer or Node install is required to run the dashboard.

## Database

Copy `.env.example` to `.env` (repo root or `dashboard/.env`). Real environment variables win over the file. The committed example uses an empty `DB_PASSWORD` on purpose.

```
DB_SERVER=localhost
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=lg-dashboard
```

There was no schema in the original repository. `dashboard/schema.sql` is inferred from the PHP:

**`users`** (login.php, register.php)

| Column | Use |
| --- | --- |
| `id` | Primary key |
| `name` | Display name, stored from registration |
| `username` | Unique login |
| `password` | `password_hash()` string (`VARCHAR(255)`) |

**`water-records`** (upload-waterdata.php, table-waterrecords.php)

The insert writes `sea`, `lon`, `lat`, `s-temp`, `a-temp`, `humidity`, `slpressure`, `ph`, `tds`, `rocket`. The table page prints `SELECT *` and expects `id`, then a timestamp, then those ten fields. The timestamp column is not inserted by the device, so it needs a default. In `schema.sql` it is named `recorded_at`. Rename is only safe on a new database; an existing deployment may use a different timestamp column name.

Load a fresh database with:

```bash
mysql -u root -p < dashboard/schema.sql
```

Create the first user through `register.php`. Registration is still open, matching the original app.

## Uploader contract

`dashboard/upload-waterdata.php` accepts GET or POST. All of these parameters are required and rejected when empty or malformed:

| Param | Meaning | Accepted shape |
| --- | --- | --- |
| `sea` | Body of water | Short label (letters, numbers, basic punctuation) |
| `lon` | Longitude | Decimal degrees `-180..180`, or `0..180` with `E`/`W` |
| `lat` | Latitude | Decimal degrees `-90..90`, or `0..90` with `N`/`S` |
| `stemp` | Surface temperature | Number with optional `K`, `C`, or `F` |
| `atemp` | Air temperature | Same as `stemp` |
| `hum` | Relative humidity | `0..100` with optional `%` |
| `slp` | Sea-level pressure | Pascals `80000..120000`, or hPa/mb `800..1200` |
| `ph` | pH | `0..14` |
| `tds` | Total dissolved solids | Non-negative number, optional `mgl`, `mg/l`, or `ppm` |
| `rkt` | Rocket or payload name | Same label rules as `sea` |

Inserts use a prepared statement. The water-data table escapes cell text on output.

## Arduino / ESP8266

Constants at the top of `LG_Water_Data_Uploader.ino`:

- `HOST`, `HOST_PORT`, `UPLOAD_PATH` — where `upload-waterdata.php` is served
- `WIFI_SSID`, `WIFI_PASS` — local Wi-Fi. Placeholders only; do not commit real values
- `DEMO_MODE` — default `true`. Simulated readings go through `buildTelemetryRequest()`
- `ESP_BAUD` — must match the ESP8266 AT baud rate (often 115200; SoftwareSerial is happier at 9600)
- `RX` / `TX` — SoftwareSerial pins 2 and 3

AT sequence:

1. `AT` — module responds
2. `AT+CWMODE=1` — station mode
3. `AT+CWJAP="ssid","password"` — join the configured network
4. `AT+CIPMUX=0` — one TCP connection
5. Each sample: `AT+CIPSTART` to `HOST:HOST_PORT`, `AT+CIPSEND=<length>`, the HTTP request, `AT+CIPCLOSE`

When `DEMO_MODE` is `false`, implement `readLongitude()`, `readLatitude()`, `readSurfaceTemp()`, `readAirTemp()`, `readHumidity()`, `readSeaLevelPressure()`, `readPh()`, and `readTds()`. Keep the string shapes in the table above so the dashboard accepts them.

## Secrets

Do not commit `.env`, Wi-Fi passwords, or database passwords. A database password was previously committed in `dashboard/config.php`. If any host still uses that password, rotate it before deploying this tree. History on the default branch still contains the old value; rotation is what makes the leak harmless.

## Dashboard template files

Do not delete `dashboard/icons/` or `dashboard/plugins/` as a drive-by cleanup. Those trees are large and include unused icon sets, but pages still link into them. See [CLEANUP.md](CLEANUP.md).
