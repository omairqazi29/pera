<?php
// Initialize the session
session_start();

// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}

require_once "config.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Real Time Water Data Streaming - LG Dashboard</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
    <!-- Custom Stylesheet -->
    <link href="./plugins/tables/css/datatable/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link href="//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/css/flag-icon.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css">


</head>

<body>

    <!--*******************
        Preloader start
    ********************-->
    <div id="preloader">
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
            </svg>
        </div>
    </div>
    <!--*******************
        Preloader end
    ********************-->


    <!--**********************************
        Main wrapper start
    ***********************************-->
    <div id="main-wrapper">

        <!--**********************************
            Nav header start
        ***********************************-->
        <div class="nav-header">
            <div class="brand-logo">
                <a href="index.php">
                    <b class="logo-abbr"><img src="images/logo.png"   width="190" height="50" alt=""> </b>
                    <span class="logo-compact"><img src="./images/logo.png"   width="190" height="50" alt=""></span>
                    <span class="brand-title">
                        <img src="images/logo.png"  width="190" height="50" alt="">
                    </span>
                </a>
            </div>
        </div>
        <!--**********************************
            Nav header end
        ***********************************-->

        <!--**********************************
            Header start
        ***********************************-->
        <div class="header">
            <div class="header-content clearfix">

                <div class="nav-control">
                    <div class="hamburger">
                        <span class="toggle-icon"><i class="icon-menu"></i></span>
                    </div>
                </div>
                <div class="header-left">
                    <div class="input-group icons">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-transparent border-0 pr-2 pr-sm-3" id="basic-addon1"><i class="mdi mdi-magnify"></i></span>
                        </div>
                        <input type="search" class="form-control" placeholder="Search Dashboard" aria-label="Search Dashboard">
                        <div class="drop-down animated flipInX d-md-none">
                            <form action="#">
                                <input type="text" class="form-control" placeholder="Search">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="header-right">
                    <li class="icons dropdown">
                            <div class="user-img c-pointer position-relative"   data-toggle="dropdown">
                                <span class="activity active"></span>
                                <img src="images/user/1.png" height="40" width="40" alt="">
                            </div>
                            <div class="drop-down dropdown-profile animated fadeIn dropdown-menu">
                                <div class="dropdown-content-body">
                                    <ul>
                                        <li><a href="logout.php"><i class="icon-key"></i> <span>Logout</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--**********************************
            Header end ti-comment-alt
        ***********************************-->

        <!--**********************************
            Sidebar start
        ***********************************-->
        <div class="nk-sidebar">
            <div class="nk-nav-scroll">
                <ul class="metismenu" id="menu">
                    <li class="nav-label">Dashboard</li>
                    <li>
                        <a href="./index.php" aria-expanded="false">
                            <i class="icon-speedometer menu-icon"></i><span class="nav-text">Dashboard</span>
                        </a>
                    </li>
                    <li class="mega-menu mega-menu-sm">
                        <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                            <i class="icon-user menu-icon"></i><span class="nav-text">Manage Account</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="./logout.php">Logout</a></li>
                        </ul>
                    </li>
                    <li class="nav-label">Data Logs</li>
                    <li>
                        <a href="./table-members.php" aria-expanded="false">
                            <i class="icon-people menu-icon"></i><span class="nav-text">Members</span>
                        </a>
                    </li>
                    <li>
                        <a href="table-rockets.php" aria-expanded="false">
                            <i class="icon-rocket menu-icon"></i><span class="nav-text">Rockets</span>
                        </a>
                    </li>
                    <li>
                        <a href="table-waterrecords.php" aria-expanded="false">
                            <i class="icon-note menu-icon"></i><span class="nav-text">Water Data Logs</span>
                        </a>
                    </li>
                    <li>
                        <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                            <i class="icon-notebook menu-icon"></i><span class="nav-text">Projects</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="./ongoing-projects.php" aria-expanded="false">Ongoing Projects</a></li>
                            <li><a href="./ongoing-projects.php" aria-expanded="false">Completed Projects</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!--**********************************
            Sidebar end
        ***********************************-->

        <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">

            <div class="row page-titles mx-0">
                <div class="col p-md-0">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.php">Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Data Logs</a></li>
                        <li class="breadcrumb-item active"><a href="table-waterrecords.php">Water Data Logs</a></li>
                    </ol>
                </div>
            </div>
            <!-- row -->

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Rockets</h4>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered zero-configuration">
                                        <thead>
                                            <tr>
                                                <th>Serial No.</th>
                                                <th>Date and Time</th>
                                                <th>Sea</th>
                                                <th>Longitude</th>
                                                <th>Latitude</th>
                                                <th>Surface Temperature</th>
                                                <th>Air Temperature</th>
                                                <th>Relative Humidity</th>
                                                <th>Sea Level Pressure</th>
                                                <th>pH</th>
                                                <th>TDS</th>
                                                <th>Rocket</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          <?php
                                            $sql = "SELECT * FROM `water-records` ORDER BY id DESC";
                                            if ($result=mysqli_query($link,$sql))
                                            {
                                        	  while ($row=mysqli_fetch_row($result))
                                              {

                                                echo "<TR>";
                                                echo "<TD>".$row[0]."</TD>";
                                                echo "<TD>".$row[1]."</TD>";
                                                echo "<TD>".$row[2]."</TD>";
                                                echo "<TD>".$row[3]."</TD>";
                                                echo "<TD>".$row[4]."</TD>";
                                                echo "<TD>".$row[5]."</TD>";
                                                echo "<TD>".$row[6]."</TD>";
                                                echo "<TD>".$row[7]."</TD>";
                                                echo "<TD>".$row[8]."</TD>";
                                                echo "<TD>".$row[9]."</TD>";
                                                echo "<TD>".$row[10]."</TD>";
                                                echo "<TD>".$row[11]."</TD>";
                                                echo "</TR>";
                                              }
                                              // Free result set
                                              mysqli_free_result($result);
                                            }

                                            mysqli_close($conn);
                                        ?>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Serial No.</th>
                                                <th>Date and Time</th>
                                                <th>Sea</th>
                                                <th>Longitude</th>
                                                <th>Latitude</th>
                                                <th>Surface Temperature</th>
                                                <th>Air Temperature</th>
                                                <th>Relative Humidity</th>
                                                <th>Sea Level Pressure</th>
                                                <th>pH</th>
                                                <th>TDS</th>
                                                <th>Rocket</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- #/ container -->
        </div>
        <!--**********************************
            Content body end
        ***********************************-->


        <!--**********************************
            Footer start
        ***********************************-->
        <div class="footer">
            <div class="copyright">
              <p>Copyright &copy; Designed & Developed by QAZI OMAIR AHMED | For <a href="https://www.liquidgalaxy.eu/">Liquid Galaxy Project</a> | <a href="https://codein.withgoogle.com/">Google Code-in 2020</a></p>
          </div>
        </div>
        <!--**********************************
            Footer end
        ***********************************-->
    </div>
    <!--**********************************
        Main wrapper end
    ***********************************-->

    <!--**********************************
        Scripts
    ***********************************-->
    <script src="plugins/common/common.min.js"></script>
    <script src="js/custom.min.js"></script>
    <script src="js/settings.js"></script>
    <script src="js/gleek.js"></script>
    <script src="js/styleSwitcher.js"></script>

    <script src="./plugins/tables/js/jquery.dataTables.min.js"></script>
    <script src="./plugins/tables/js/datatable/dataTables.bootstrap4.min.js"></script>
    <script src="./plugins/tables/js/datatable-init/datatable-basic.min.js"></script>

</body>

</html>
