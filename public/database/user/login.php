<?php

    require_once("../dbhelper.php");

    $db = connect_to_db();
    $error = 0;

    #get all the variables
    $email = $_POST["email"];
    $password = $_POST["password"];

    #check to make sure we have all the variables
    if (empty($email) ||
        empty($password))
    {
        http_response_code(422);
        die("missing parameters");
    }

    $sql = "select * from USERS where U_EMAIL = '$email' and U_PASSWORD = '$password'";
    $result = get_from_db($sql, $db, $error);

    if (count($result) == 0)
    {
        http_response_code(401);
        die("unknown user or incorrect password");
    }
