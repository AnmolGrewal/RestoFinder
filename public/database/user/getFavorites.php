<?php

    require_once("../dbhelper.php");
    require_once("../../../environment.php");

    $db = connect_to_db($db_host);
    $error = 0;

    #get all the variables
    $userId = $_POST["user"];

    #check to make sure we have all the variables
    if (empty($userId))
    {
        http_response_code(422);
        die("missing parameters");
    }

    $sql = "select USERS.U_ID, RESTAURANTS.R_ID, R_NAME from FAVORITES
                inner join USERS on FAVORITES.U_ID = USERS.U_ID
                inner join RESTAURANTS on FAVORITES.R_ID = RESTAURANTS.R_ID
            where USERS.U_ID = $userId";
    $result = get_from_db($sql, $db, $error);

    if ($error)
    {
        http_response_code(500);
        die("unable to remove favorite restaurant");
    }

    echo json_encode($result);

    mysqli_close($db);
