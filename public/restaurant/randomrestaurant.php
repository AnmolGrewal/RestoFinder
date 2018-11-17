<?php

require_once("yelphelper.php");
require_once("../../environment.php");

$client = get_yelp_client($yelp_key);

#get all the variables
$location = $_POST["location"];
$latitude = $_POST["latitude"];
$longitude = $_POST["longitude"];
$radius = $_POST["radius"];
$categories = $_POST["categories"];
$price = $_POST["price"];

#check to make sure we have all the variables
if (empty($location) && (empty($latitude) || empty($longitude)))
{
    http_response_code(422);
    die("missing parameters");
}

$restaurants = get_restaurant_list($client, $location, $latitude, $longitude, $radius, $categories, $price);
$random_restaurant = $restaurants[mt_rand(0, count($restaurants)-1)];

echo json_encode($random_restaurant);