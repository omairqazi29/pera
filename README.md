# P.E.R.A. Water Data Collection System

P.E.R.A. (Ponent Exploration & Research in Aerospace) is a LleidaDrone / Liquid Galaxy project for collecting water and atmosphere readings from a water-rocket payload. An Arduino drives an ESP8266, which uploads each reading with an HTTP GET into a PHP/MySQL dashboard used to review the logs.

This repository holds the pitch, the dashboard, and the uploader sketch. It is a student-era prototype: the dashboard UI is an admin template, and the firmware ships in demo mode.

## Architecture

```
sensors (or demo stubs)
        |
        v
Arduino sketch (LG_Water_Data_Uploader.ino)
        |  AT commands over SoftwareSerial
        v
ESP8266 ---- HTTP GET ----> upload-waterdata.php
                                    |
                                    v
                              MySQL `water-records`
                                    |
                                    v
                         PHP dashboard (login + tables)
```

1. The sketch builds one reading (`buildTelemetryRequest()`). With `DEMO_MODE` left at its default (`true`), values are simulated. Set it to `false` and fill in the sensor stubs for hardware.
2. The ESP8266 joins Wi-Fi and sends `GET /upload-waterdata.php` with the parameter names the PHP endpoint expects: `sea`, `lon`, `lat`, `stemp`, `atemp`, `hum`, `slp`, `ph`, `tds`, `rkt`.
3. `dashboard/upload-waterdata.php` validates those parameters and inserts a row with a prepared statement.
4. Signed-in users review rows on `table-waterrecords.php`. Login and registration use prepared statements and `password_hash`.

The upload URL is not behind the dashboard login. Treat it as a device endpoint and do not expose it on an open network without additional controls.

## Repository layout

| Path | Role |
| --- | --- |
| [Pitch PDF](https://github.com/omairqazi29/pera/blob/main/P.E.R.A%20WATER%20DATA%20COLLECTION%20SYSTEM.pdf) | Project objectives and system description |
| [Prototype video](https://1drv.ms/v/s!AsvVMX2LdYhb5TuH7gExwOoEX1vN?e=kl0cUP) | Hardware and dashboard demo |
| `dashboard/` | PHP/MySQL UI: login, registration, water-data table |
| `dashboard/schema.sql` | Inferred MySQL schema (none was committed originally) |
| `LG_Water_Data_Uploader.ino` | Arduino + ESP8266 uploader |
| `.env.example` | Dummy database settings. Copy to `.env` locally |

`dashboard/icons/` and `dashboard/plugins/` are leftovers from the admin template (icon fonts, chart libraries, editors). They are still referenced by the pages, so they stay in the tree. See [CLEANUP.md](CLEANUP.md).

## Setup

Requirements: PHP 7.4+ (8.x works) with `mysqli`, MySQL 5.7+ or MariaDB, and a web server whose document root is `dashboard/` (or adjust `UPLOAD_PATH` in the sketch). Arduino IDE with `SoftwareSerial` (built in) for the firmware.

### Dashboard

1. Create a database and load the inferred schema:

   ```bash
   mysql -u root -p < dashboard/schema.sql
   ```

   Column types and the timestamp column name `recorded_at` are inferred. Details and the `users` / `water-records` columns are in [CONTRIBUTING.md](CONTRIBUTING.md) and `dashboard/schema.sql`. If a live database already exists, compare names before importing.

2. Configure credentials outside git:

   ```bash
   cp .env.example .env
   ```

   Set `DB_SERVER`, `DB_USERNAME`, `DB_PASSWORD`, and `DB_NAME`. Process environment variables override `.env`. If nothing is set, the app falls back to `localhost` / `root` / an empty password / `lg-dashboard` for a local demo only.

3. Point the vhost at `dashboard/` and open `login.php`. Register the first account at `register.php` (open registration is unchanged from the original app).

4. Confirm an insert. From the dashboard host:

   ```bash
   curl -sS "http://localhost/upload-waterdata.php?sea=Bay%20of%20Bengal&lon=88E&lat=21N&stemp=293K&atemp=301K&hum=82%25&slp=101325Pa&ph=7.8&tds=740mgl&rkt=LG%20Rocket%202FA"
   ```

   A valid row returns `Success!`. Empty or malformed parameters return HTTP 400.

### Firmware

1. Open `LG_Water_Data_Uploader.ino` in the Arduino IDE.
2. Edit the block marked network configuration: `HOST`, `WIFI_SSID`, `WIFI_PASS`, and `UPLOAD_PATH` if the dashboard is not at the web root.
3. Leave `DEMO_MODE` as `true` until real sensors are connected. The stubs in `readLongitude()`, `readLatitude()`, and the other `read*()` functions are the plug-in points.
4. Wire ESP8266 RX/TX to pins 2 and 3 (SoftwareSerial) and match `ESP_BAUD` to the AT firmware baud rate.
5. Flash the board. The serial monitor at 9600 baud prints each AT command (`AT`, `AT+CWMODE=1`, `AT+CWJAP`, `AT+CIPMUX=0`, then `CIPSTART` / `CIPSEND` / `CIPCLOSE` per reading).

## Security

Database credentials used to be hardcoded in `dashboard/config.php` and are in the git history of this repository. **Rotate that password on any live MySQL host that used it**, then set the new password only in the environment or a local `.env` file. Do not commit the new value.

`.env` and `.DS_Store` are gitignored.

## About P.E.R.A.

The Ponent Exploration & Research in Aerospace initiative, by the LleidaDrone Association, looks past the altitude range of typical drones and involves engineering students in atmospheric and space work.

[P.E.R.A. on Liquid Galaxy](https://www.liquidgalaxy.eu/2019/09/pera-ponent-exploration-and-research-in.html)

## Contributing

Setup details, PHP/MySQL notes, and firmware configuration are in [CONTRIBUTING.md](CONTRIBUTING.md).
