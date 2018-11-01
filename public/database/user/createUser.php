<?php

    require_once("../dbhelper.php");

    $db = connect_to_db();

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
    }

    


