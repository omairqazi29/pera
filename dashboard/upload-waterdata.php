<?php
/*
 * Device ingest for water telemetry.
 *
 * Query (or POST) names, also used by LG_Water_Data_Uploader.ino:
 *   sea, lon, lat, stemp, atemp, hum, slp, ph, tds, rkt
 *
 * Values are validated, then inserted with a prepared statement.
 * This endpoint does not require a dashboard login (the probe calls it
 * directly). Keep it on a network you trust, or put it behind your own
 * gateway. This file does not add an API-key scheme.
 */

/**
 * @return array{ok:bool,error:string,values:array<string,string>}
 */
function pera_validate_waterdata(array $src)
{
    $keys = array('sea', 'lon', 'lat', 'stemp', 'atemp', 'hum', 'slp', 'ph', 'tds', 'rkt');
    $values = array();

    foreach ($keys as $key) {
        if (!isset($src[$key]) || is_array($src[$key])) {
            return pera_waterdata_reject('Missing parameter: ' . $key);
        }
        $raw = trim((string) $src[$key]);
        if ($raw === '') {
            return pera_waterdata_reject('Empty parameter: ' . $key);
        }
        if (strlen($raw) > 128) {
            return pera_waterdata_reject('Parameter too long: ' . $key);
        }
        if (preg_match('/[\x00-\x1F\x7F]/', $raw)) {
            return pera_waterdata_reject('Malformed parameter: ' . $key);
        }
        $values[$key] = $raw;
    }

    if (!pera_valid_label($values['sea'])) {
        return pera_waterdata_reject('Malformed parameter: sea');
    }
    if (!pera_valid_lon($values['lon'])) {
        return pera_waterdata_reject('Malformed parameter: lon');
    }
    if (!pera_valid_lat($values['lat'])) {
        return pera_waterdata_reject('Malformed parameter: lat');
    }
    if (!pera_valid_temp($values['stemp'])) {
        return pera_waterdata_reject('Malformed parameter: stemp');
    }
    if (!pera_valid_temp($values['atemp'])) {
        return pera_waterdata_reject('Malformed parameter: atemp');
    }
    if (!pera_valid_humidity($values['hum'])) {
        return pera_waterdata_reject('Malformed parameter: hum');
    }
    if (!pera_valid_pressure($values['slp'])) {
        return pera_waterdata_reject('Malformed parameter: slp');
    }
    if (!pera_valid_ph($values['ph'])) {
        return pera_waterdata_reject('Malformed parameter: ph');
    }
    if (!pera_valid_tds($values['tds'])) {
        return pera_waterdata_reject('Malformed parameter: tds');
    }
    if (!pera_valid_label($values['rkt'])) {
        return pera_waterdata_reject('Malformed parameter: rkt');
    }

    return array('ok' => true, 'error' => '', 'values' => $values);
}

function pera_waterdata_reject($message)
{
    return array('ok' => false, 'error' => $message, 'values' => array());
}

function pera_valid_label($value)
{
    return (bool) preg_match('/^[\p{L}\p{N} .,_\'()\-]{1,128}$/u', $value);
}

function pera_parse_coord($value, $suffixes)
{
    $pattern = '/^(-?\d+(?:\.\d+)?)([' . $suffixes . '])?$/';
    if (!preg_match($pattern, $value, $matches)) {
        return null;
    }
    $suffix = '';
    if (isset($matches[2]) && $matches[2] !== '') {
        $suffix = strtoupper($matches[2]);
    }
    return array('num' => (float) $matches[1], 'suffix' => $suffix);
}

function pera_valid_lon($value)
{
    $parsed = pera_parse_coord($value, 'EeWw');
    if ($parsed === null) {
        return false;
    }
    if ($parsed['suffix'] === '') {
        return $parsed['num'] >= -180.0 && $parsed['num'] <= 180.0;
    }
    return $parsed['num'] >= 0.0 && $parsed['num'] <= 180.0;
}

function pera_valid_lat($value)
{
    $parsed = pera_parse_coord($value, 'NnSs');
    if ($parsed === null) {
        return false;
    }
    if ($parsed['suffix'] === '') {
        return $parsed['num'] >= -90.0 && $parsed['num'] <= 90.0;
    }
    return $parsed['num'] >= 0.0 && $parsed['num'] <= 90.0;
}

function pera_valid_temp($value)
{
    if (!preg_match('/^(-?\d+(?:\.\d+)?)([KkCcFf])?$/', $value, $matches)) {
        return false;
    }
    $num = (float) $matches[1];
    $unit = '';
    if (isset($matches[2]) && $matches[2] !== '') {
        $unit = strtoupper($matches[2]);
    }
    if ($unit === 'K') {
        return $num >= 150.0 && $num <= 400.0;
    }
    if ($unit === 'C') {
        return $num >= -20.0 && $num <= 80.0;
    }
    if ($unit === 'F') {
        return $num >= -4.0 && $num <= 176.0;
    }
    return $num >= -20.0 && $num <= 400.0;
}

function pera_valid_humidity($value)
{
    if (!preg_match('/^(\d+(?:\.\d+)?)%?$/', $value, $matches)) {
        return false;
    }
    $num = (float) $matches[1];
    return $num >= 0.0 && $num <= 100.0;
}

function pera_valid_pressure($value)
{
    if (!preg_match('/^(\d+(?:\.\d+)?)(Pa|hPa|mbar|mb)?$/i', $value, $matches)) {
        return false;
    }
    $num = (float) $matches[1];
    $unit = '';
    if (isset($matches[2])) {
        $unit = strtolower($matches[2]);
    }
    if ($unit === 'pa') {
        return $num >= 80000.0 && $num <= 120000.0;
    }
    if ($unit === 'hpa' || $unit === 'mb' || $unit === 'mbar') {
        return $num >= 800.0 && $num <= 1200.0;
    }
    if ($num >= 80000.0 && $num <= 120000.0) {
        return true;
    }
    return $num >= 800.0 && $num <= 1200.0;
}

function pera_valid_ph($value)
{
    if (!preg_match('/^\d+(?:\.\d+)?$/', $value)) {
        return false;
    }
    $num = (float) $value;
    return $num >= 0.0 && $num <= 14.0;
}

function pera_valid_tds($value)
{
    if (!preg_match('/^(\d+(?:\.\d+)?)(mgl|mg\/l|ppm)?$/i', $value, $matches)) {
        return false;
    }
    $num = (float) $matches[1];
    return $num >= 0.0 && $num <= 10000.0;
}

function pera_waterdata_input_from_request()
{
    $keys = array('sea', 'lon', 'lat', 'stemp', 'atemp', 'hum', 'slp', 'ph', 'tds', 'rkt');
    $input = array();
    foreach ($keys as $key) {
        if (isset($_POST[$key]) && !is_array($_POST[$key]) && trim((string) $_POST[$key]) !== '') {
            $input[$key] = $_POST[$key];
        } elseif (isset($_GET[$key]) && !is_array($_GET[$key])) {
            $input[$key] = $_GET[$key];
        }
    }
    return $input;
}

$pera_is_entry = isset($_SERVER['SCRIPT_FILENAME'])
    && realpath(__FILE__) === realpath($_SERVER['SCRIPT_FILENAME']);

if (!$pera_is_entry) {
    return;
}

require_once "config.php";

header('Content-Type: text/plain; charset=utf-8');

$method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : '';
if ($method !== 'GET' && $method !== 'POST') {
    http_response_code(405);
    echo "Method not allowed.";
    mysqli_close($link);
    exit;
}

$validated = pera_validate_waterdata(pera_waterdata_input_from_request());
if (!$validated['ok']) {
    http_response_code(400);
    echo $validated['error'];
    mysqli_close($link);
    exit;
}

$sea = $validated['values']['sea'];
$lon = $validated['values']['lon'];
$lat = $validated['values']['lat'];
$stemp = $validated['values']['stemp'];
$atemp = $validated['values']['atemp'];
$hum = $validated['values']['hum'];
$slp = $validated['values']['slp'];
$ph = $validated['values']['ph'];
$tds = $validated['values']['tds'];
$rkt = $validated['values']['rkt'];

$sql = "INSERT INTO `water-records` (`sea`, `lon`, `lat`, `s-temp`, `a-temp`, `humidity`, `slpressure`, `ph`, `tds`, `rocket`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = mysqli_prepare($link, $sql);

if ($stmt) {
    mysqli_stmt_bind_param($stmt, "ssssssssss", $sea, $lon, $lat, $stemp, $atemp, $hum, $slp, $ph, $tds, $rkt);
    if (mysqli_stmt_execute($stmt)) {
        echo "Success!";
    } else {
        error_log('P.E.R.A. water-records insert failed: ' . mysqli_stmt_error($stmt));
        http_response_code(500);
        echo "Something went wrong. Please try again later.";
    }
    mysqli_stmt_close($stmt);
} else {
    error_log('P.E.R.A. water-records prepare failed: ' . mysqli_error($link));
    http_response_code(500);
    echo "Something went wrong. Please try again later.";
}

mysqli_close($link);
?>
