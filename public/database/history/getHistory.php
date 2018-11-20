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

    $sql = "select HISTORY.U_ID, RESTAURANTS.R_ID, RESTAURANTS.R_NAME, HISTORY.H_DATE from HISTORY
                inner join RESTAURANTS on HISTORY.R_ID = RESTAURANTS.R_ID
            where HISTORY.U_ID = $userId
            order by H_DATE";
    $result = get_from_db($sql, $db, $error);

    if ($error)
    {
        http_response_code(500);
        die("unable to remove favorite restaurant");
    }

    echo json_encode($result);

    mysqli_close($db);
