<?php

    require_once("../dbhelper.php");
    require_once("../../../environment.php");
    require_once("../../restaurant/yelphelper.php");

    $db = connect_to_db($db_host);
    $error = 0;

    #get all the variables
    $userId = $_POST["user"];
    $restaurantId = $_POST["restaurant"];

    #check to make sure we have all the variables
    if (empty($userId) ||
        empty($restaurantId))
    {
        http_response_code(422);
        die("missing parameters");
    }

    $sql = "delete from FAVORITES where U_ID = $userId and R_ID = '$restaurantId'";
    get_from_db($sql, $db, $error);

    if ($error)
    {
        http_response_code(500);
        die("unable to remove favorite restaurant");
    }

    mysqli_close($db);
