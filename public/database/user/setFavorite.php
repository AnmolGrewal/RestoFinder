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

    check_restaurant($restaurantId);

    mysqli_close($db);

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

        global $yelp_key;
        $client = get_yelp_client($yelp_key);

        try
        {
            $parameters = [
                'locale' => 'en_US',
            ];

            $restaurant = $client->getBusiness($restaurantId, $parameters);
        }
        catch (Exception $e)
        {
            http_response_code(500);
            die($e->getMessage());
        }

        $sql = "insert into RESTAURANTS values ('$restaurantId', '$restaurant->name')";
        get_from_db($sql, $db, $error);

        if ($error)
        {
            http_response_code(500);
            die("unable to add restaurant to database");
        }
    }
