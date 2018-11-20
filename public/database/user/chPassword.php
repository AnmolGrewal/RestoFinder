<?php

    require_once("../dbhelper.php");
    require_once("../../../environment.php");

    $db = connect_to_db($db_host);
    $error = 0;

    #get all the variables
    $userId = $_POST["user"];
    $oldPass = $_POST["oldPassword"];
    $newPass = $_POST["newPassword"];

    #check to make sure we have all the variables
    if (empty($userId) ||
        empty($oldPass) ||
        empty($newPass))
    {
        http_response_code(422);
        die("missing parameters");
    }

    $sql = "select * from USERS where U_ID = $userId and U_PASSWORD = '$oldPass'";
    $result = get_from_db($sql, $db, $error);

    if ($error || empty($result))
    {
        http_response_code(422);
        die("incorrect password");
    }

    $sql = "update USERS set U_PASSWORD = '$newPass' where U_ID = $userId";
    get_from_db($sql, $db, $error);

    if ($error)
    {
        http_response_code(500);
        die("unable to update password");
    }

    mysqli_close($db);
