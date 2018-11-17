<?php

    require_once("../dbhelper.php");
    require_once("../../../environment.php");

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

    check_restaurant($restaurantId);

    function check_restaurant($restaurantId)
    {
        global $db;
        global $error;

        $sql = "select * from RESTAURANTS where R_ID = '$restaurantId'";
        $result = get_from_db($sql, $db, $error);

        if (count($result) > 0)
        {
            return;
        }

        echo("Restaurant not in database");
    }
