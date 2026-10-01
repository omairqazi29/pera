<?php
// Include config file
require_once "config.php";

// Define variables and initialize with empty values
$name = $username = $password = $confirm_password = "";
$name_err = $username_err = $password_err = $confirm_password_err = "";

// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){

    if(empty(trim($_POST["name"]))){
        $name_err = "Please enter a name.";
    } else{
        $name = trim($_POST["name"]);
        if(strlen($name) > 100 || !preg_match('/^[\p{L}\p{N} .,_\'()\-]{1,100}$/u', $name)){
            $name_err = "Please enter a valid name.";
        }
    }
    // Validate username
    if(empty(trim($_POST["username"]))){
        $username_err = "Please enter a username.";
    } elseif(!preg_match('/^[A-Za-z0-9._-]{3,50}$/', trim($_POST["username"]))){
        $username = trim($_POST["username"]);
        $username_err = "Username must be 3-50 characters: letters, numbers, dot, underscore, or hyphen.";
    } else{
        // Prepare a select statement
        $sql = "SELECT id FROM users WHERE username = ?";

        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_username);

            // Set parameters
            $param_username = trim($_POST["username"]);

            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                /* store result */
                mysqli_stmt_store_result($stmt);

                if(mysqli_stmt_num_rows($stmt) == 1){
                    $username_err = "This username is already taken.";
                } else{
                    $username = trim($_POST["username"]);
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }

            mysqli_stmt_close($stmt);
        }
    }

    // Validate password
    if(empty(trim($_POST["password"]))){
        $password_err = "Please enter a password.";
    } elseif(strlen($_POST["password"]) > 256){
        $password_err = "Password must be at most 256 characters.";
    } elseif(strlen(trim($_POST["password"])) < 6){
        $password_err = "Password must have atleast 6 characters.";
    } else{
        $password = trim($_POST["password"]);
    }

    // Validate confirm password
    if(empty(trim($_POST["confirm_password"]))){
        $confirm_password_err = "Please confirm password.";
    } else{
        $confirm_password = trim($_POST["confirm_password"]);
        if(empty($password_err) && ($password != $confirm_password)){
            $confirm_password_err = "Password did not match.";
        }
    }

    // Check input errors before inserting in database
    if(empty($name_err) && empty($username_err) && empty($password_err) && empty($confirm_password_err)){

        // Prepare an insert statement
        $sql = "INSERT INTO users (name, username, password) VALUES (?, ?, ?)";

        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "sss", $param_name, $param_username, $param_password);

            // Set parameters
            $param_name = $name;
            $param_username = $username;
            $param_password = password_hash($password, PASSWORD_DEFAULT); // Creates a password hash

            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Redirect to login page
                header("location: login.php");
                exit;
            } else{
                echo "Something went wrong. Please try again later.";
            }

            mysqli_stmt_close($stmt);
        }
    }

    // Close connection
    mysqli_close($link);
}
?>

<!DOCTYPE html>
<html class="h-100" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Register - LG Dashboard</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link href="css/style.css" rel="stylesheet">

</head>

<body class="h-100">

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


    <div class="login-form-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-xl-6">
                    <div class="form-input-content">
                        <div class="card login-form mb-0">
                            <div class="card-body pt-5">

                                  <a class="text-center" href="index.php"><h2> <img src="images/logo.png"   width="100" height="95" alt=""> LIQUID GALAXY PROJECT </h2></a>
                                  <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                                    <div class="form-group <?php echo (!empty($name_err)) ? 'has-error' : ''; ?>">
                                        <label>Name</label>
                                        <input type="text" name="name" class="form-control" value="<?php echo htmlspecialchars($name, ENT_QUOTES, 'UTF-8'); ?>">
                                        <span class="help-block"><?php echo htmlspecialchars($name_err, ENT_QUOTES, 'UTF-8'); ?></span>
                                    </div>
                                    <div class="form-group <?php echo (!empty($username_err)) ? 'has-error' : ''; ?>">
                                        <label>Username</label>
                                        <input type="text" name="username" class="form-control" value="<?php echo htmlspecialchars($username, ENT_QUOTES, 'UTF-8'); ?>">
                                        <span class="help-block"><?php echo htmlspecialchars($username_err, ENT_QUOTES, 'UTF-8'); ?></span>
                                    </div>
                                    <div class="form-group <?php echo (!empty($password_err)) ? 'has-error' : ''; ?>">
                                        <label>Password</label>
                                        <input type="password" name="password" class="form-control" value="<?php echo htmlspecialchars($password, ENT_QUOTES, 'UTF-8'); ?>">
                                        <span class="help-block"><?php echo htmlspecialchars($password_err, ENT_QUOTES, 'UTF-8'); ?></span>
                                    </div>
                                    <div class="form-group <?php echo (!empty($confirm_password_err)) ? 'has-error' : ''; ?>">
                                        <label>Confirm Password</label>
                                        <input type="password" name="confirm_password" class="form-control" value="<?php echo htmlspecialchars($confirm_password, ENT_QUOTES, 'UTF-8'); ?>">
                                        <span class="help-block"><?php echo htmlspecialchars($confirm_password_err, ENT_QUOTES, 'UTF-8'); ?></span>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" class="btn btn-primary" value="Submit">
                                        <input type="reset" class="btn btn-default" value="Reset">
                                    </div>
                                  </form>
                                    <p class="mt-5 login-form__footer">Have account <a href="login.php" class="text-primary">Sign in </a> now</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




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
