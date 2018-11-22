<?php

    require_once("../dbhelper.php");
    require_once("../../../environment.php");

    $db = connect_to_db($db_host);
    $error = 0;

    #get all the variables
    $userId = $_POST["user"];
    $distance = $_POST["distance"];
    $categories = $_POST["categories"];

    #check to make sure we have all the variables
    if (empty($userId) ||
        empty($distance))
    {
        http_response_code(422);
        die("missing parameters");
    }
    
    $sql = "select * from PREFERENCES where U_ID = $userId";
    $result = get_from_db($sql, $db, $error);

    if ($error || empty($result))
    {
        http_response_code(422);
        die("invalid user id");
    }
    
    $sql = "update PREFERENCES set U_DISTANCE = '$distance', U_CATEGORIES = '$categories' where U_ID = $userId";
    get_from_db($sql, $db, $error);

    if ($error)
    {
        http_response_code(500);
        die("unable to update preferences");
    }

    mysqli_close($db);
