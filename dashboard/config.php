<?php
/*
 * Database connection for the P.E.R.A. dashboard.
 *
 * Credentials are read from the process environment, then from a local .env
 * file (repository root, then dashboard/.env). See ../.env.example.
 *
 * The only built-in fallback is an empty password, for a local demo MySQL
 * account such as root with no password. Do not put a real password in this
 * file or anywhere else in git.
 */

mysqli_report(MYSQLI_REPORT_OFF);

/**
 * Apply KEY=value lines from a dotenv file.
 * Keys already present in the process environment ($locked) are left alone.
 */
function pera_load_env_file($path, array $locked)
{
    if (!is_readable($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#') {
            continue;
        }
        if (strpos($line, 'export ') === 0) {
            $line = trim(substr($line, 7));
        }

        $eq = strpos($line, '=');
        if ($eq === false) {
            continue;
        }

        $key = trim(substr($line, 0, $eq));
        $value = trim(substr($line, $eq + 1));
        if (!preg_match('/^[A-Za-z_][A-Za-z0-9_]*$/', $key)) {
            continue;
        }
        if (isset($locked[$key])) {
            continue;
        }

        $len = strlen($value);
        if ($len >= 2) {
            $quote = $value[0];
            if (($quote === '"' || $quote === "'") && $value[$len - 1] === $quote) {
                $value = substr($value, 1, -1);
            }
        }
        if (strpos($value, "\0") !== false) {
            continue;
        }

        putenv($key . '=' . $value);
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }
}

function pera_env($key, $default)
{
    $value = getenv($key);
    if ($value === false) {
        return $default;
    }
    return $value;
}

$pera_env_keys = array('DB_SERVER', 'DB_USERNAME', 'DB_PASSWORD', 'DB_NAME');
$pera_locked = array();
foreach ($pera_env_keys as $pera_key) {
    $pera_existing = getenv($pera_key);
    if ($pera_existing !== false) {
        $pera_locked[$pera_key] = true;
    }
}

pera_load_env_file(dirname(__DIR__) . '/.env', $pera_locked);
pera_load_env_file(__DIR__ . '/.env', $pera_locked);

define('DB_SERVER', pera_env('DB_SERVER', 'localhost'));
define('DB_USERNAME', pera_env('DB_USERNAME', 'root'));
define('DB_PASSWORD', pera_env('DB_PASSWORD', ''));
define('DB_NAME', pera_env('DB_NAME', 'lg-dashboard'));

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if ($link === false) {
    error_log('P.E.R.A. database connection failed: ' . mysqli_connect_error());
    if (!headers_sent()) {
        http_response_code(500);
    }
    die('ERROR: Could not connect to the database. Set DB_SERVER, DB_USERNAME, DB_PASSWORD, and DB_NAME.');
}

mysqli_set_charset($link, 'utf8mb4');
?>
