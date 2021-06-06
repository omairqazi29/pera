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
    <title>Ongoing Projects - LG Dashboard</title>
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
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Projects</a></li>
                        <li class="breadcrumb-item active"><a href="ongoing-projects.php">Ongoing Projects</a></li>
                    </ol>
                </div>
            </div>
            <!-- row -->

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title"><img src="images/seaforecasting.png" height='100' weight ='100'> SEASIGHT FORECASTING</h4>
                                <p>We're starting a new Open Project codenamed Sea Forecasting that will pursue several objectives:<br>- Capture weather data from oceans and seas.<br>- Creating a local Hadoop instance on a Liquid Galaxy server to acquire the data from open APIS, legacy databases, rovs, etc.<br>- Developing a IA to have weather predictions based on this data.<br>- Creating a full visualization on the Liquid Galaxy, including sea temperatures, paths of machinery that capture this data, like ROVs, Buoys, scientific vessels and other sensor networks.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title"><img src="images/internet-of-espadrilles.png" height='100' weight ='100'> INTERNET OF ESPADRILLES</h4>
                                <p>The new Open Project at the Liquid Galaxy community it's and IoT-DIY-BigData mix.<br>We have several students working on diferent blocks of the project, including:<br>- An Arduino miniaturized board designed by ourselves and being manufactured in china (as of december 2019), that will be embeded on the Espadrilles on a special textile side bag.<br>- a Android mobile app that will make the connection hop by Bluetooth between the espadrilles and the cloud.<br>- a backend connected to the Google Cloud IoT Core.<br>- a visualization on the Liquid Galaxy.<br>All with several special use cases we're developing that makes it different from a typical smart band you can wear, and doing workshops to do your own espadrilles and collaborate in create the use cases.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title"><img src="images/pera.jpeg" height='100' weight ='100'> P.E.R.A., PONENT EXPLORATION AND RESEARCH IN SPACE</h4>
                                <p>The LleidaDrone Association starts a new initiative to send Probe Balloons and Nano Satellites to the space.<br>The project will be developed by engineering students of six universities with the support of a team of professionals in the Aerospace sector.<br>The LleidaDrone Association, headquartered at the R&D IT Laboratories of the Scientific Park of Lleida (PCiTAL), next to the Liquid Galaxy LAB, home of the Liquid Galaxy project, has presented his new initiative in a spin-off format: P.E.R.A., Ponent Exploration and Research in Space. The objective is to deliver projects in a superior altitude than the drones can reach, on the different atmospheric layers and the space.<br>The project will be developed by a team of engineering students from six universities, including  Escola Politècnica Superior of Universitat de Lleida, Universitat Politècnica de Catalunya,  Universidad La Laguna of Tenerife, Universidad Politècnica of Madrid and the FACENS university from Sorocaba, Brasil. The students team will have the support of a Senior Advisory Board with a dozen professionals with large experience on Aerospace projects.<br>Next autumn the agenda will include many activities theoretical and practical. First, students will assist to technical talks from experts on the field, and will travel abroad to see aerospatial installations, like some NASA centers in US. Also will start to work on the development on projects such as Nano Satellites, Probe Balloons, Rockets, electronic circuits for spatial communications and specifically developed software, among others specifically ideated for our Liquid Galaxy project, like Satellite orbits representation.</p>
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

</body>

</html>
