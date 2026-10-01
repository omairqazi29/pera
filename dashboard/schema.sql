-- Expected MySQL schema for the P.E.R.A. dashboard.
--
-- No CREATE TABLE script shipped with the original project. This file is
-- inferred from dashboard PHP:
--   login.php / register.php  -> users(id, name, username, password)
--   upload-waterdata.php      -> INSERT into `water-records`
--   table-waterrecords.php    -> SELECT * and render columns in order:
--     id, a timestamp, sea, lon, lat, s-temp, a-temp, humidity,
--     slpressure, ph, tds, rocket
--
-- The uploader does not send the timestamp, so that column needs a default.
-- Its name (`recorded_at`) is inferred. If you already have a live table,
-- keep the existing timestamp column name instead of renaming it.
--
-- Import:
--   mysql -u root -p < dashboard/schema.sql

CREATE DATABASE IF NOT EXISTS `lg-dashboard`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `lg-dashboard`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `water-records` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `recorded_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sea` VARCHAR(128) NOT NULL,
  `lon` VARCHAR(32) NOT NULL,
  `lat` VARCHAR(32) NOT NULL,
  `s-temp` VARCHAR(32) NOT NULL,
  `a-temp` VARCHAR(32) NOT NULL,
  `humidity` VARCHAR(32) NOT NULL,
  `slpressure` VARCHAR(32) NOT NULL,
  `ph` VARCHAR(16) NOT NULL,
  `tds` VARCHAR(32) NOT NULL,
  `rocket` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
