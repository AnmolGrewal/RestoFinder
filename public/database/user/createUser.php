<?php

    require_once("../dbhelper.php");
    require_once("../../../environment.php");

    $db = connect_to_db($db_host);
    $error = 0;

    #get all the variables
    $email = $_POST["email"];
    $password = $_POST["password"];
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $gender = $_POST["gender"];

    #check to make sure we have all the variables
    if (empty($email) ||
        empty($password) ||
        empty($first_name) ||
        empty($last_name) ||
        empty($gender))
    {
        http_response_code(422);
        die("missing parameters");
    }

    #see if that email is already used
    $sql = "select U_EMAIL from USERS where U_EMAIL = '$email'";
    $result = get_from_db($sql, $db, $error);

    if (count($result) > 0)
    {
        http_response_code(422);
        die("email already in use");
    }

    #insert the user into the database
    $sql = "insert into USERS 
        (U_EMAIL, U_PASSWORD, U_FIRST_NAME, U_LAST_NAME, U_GENDER) values 
        ('$email', '$password', '$first_name', '$last_name', '$gender')";

    get_from_db($sql, $db, $error);

    if ($error)
    {
        http_response_code(500);
        die("unable to create new user");
    }

    mysqli_close($db);
