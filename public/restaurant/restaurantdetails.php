<?php

require_once("yelphelper.php");
require_once("../../environment.php");

$client = get_yelp_client($yelp_key);

#get all the variables
$id = $_POST["id"];

#check to make sure we have all the variables
if (empty($id))
{
    http_response_code(422);
    die("missing parameters");
}

$restaurant = retrieve_restaurant_by_id($client, $id);

echo json_encode($restaurant);