<?php
// Include config file
require_once "config.php";

// Define variables and initialize with empty values
$sea = $_GET["sea"];
$lon = $_GET["lon"];
$lat = $_GET["lat"];
$stemp = $_GET["stemp"];
$atemp = $_GET["atemp"];
$hum = $_GET["hum"];
$slp = $_GET["slp"];
$ph = $_GET["ph"];
$tds = $_GET["tds"];
$rkt = $_GET["rkt"];

// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "GET"){

    $sql = "INSERT INTO `water-records` (`sea`, `lon`, `lat`, `s-temp`, `a-temp`, `humidity`, `slpressure`, `ph`, `tds`, `rocket`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

      if($stmt = mysqli_prepare($link, $sql)){
          // Bind variables to the prepared statement as parameters
          mysqli_stmt_bind_param($stmt, "ssssssssss",$param_sea, $param_lon, $param_lat, $param_stemp, $param_atemp, $param_hum, $param_slp, $param_ph, $param_tds, $param_rkt);

          // Set parameters
          $param_sea = $sea;
          $param_lon = $lon;
          $param_lat = $lat;
          $param_stemp = $stemp;
          $param_atemp = $atemp;
          $param_hum = $hum;
          $param_slp = $slp;
          $param_ph = $ph;
          $param_tds = $tds;
          $param_rkt = $rkt;

          // Attempt to execute the prepared statement
          if(mysqli_stmt_execute($stmt)){
              // Redirect to login page
              echo "Success!";
          } else{
              echo "Something went wrong. Please try again later.";
          }
      }

      // Close statement
    mysqli_stmt_close($stmt);

    // Close connection
    mysqli_close($link);
}
?>
