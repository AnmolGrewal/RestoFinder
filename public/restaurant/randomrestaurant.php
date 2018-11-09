<?php

require __DIR__ . '/../../vendor/autoload.php';

require_once("../../apikeys.php");

$options = array(
    'apiHost' => 'api.yelp.com', // Optional, default 'api.yelp.com',
    'apiKey' => $yelp_key, // Required, unless accessToken is provided
);

$client = \Stevenmaguire\Yelp\ClientFactory::makeWith(
    $options,
    \Stevenmaguire\Yelp\Version::THREE
);

$address = $_POST["address"];
$latitude = $_POST["latitude"];
$longitude = $_POST["longitude"];

#check to make sure we have all the variables
if (empty($address) && (empty($latitude) || empty($longitude)))
{
    http_response_code(422);
    die("missing parameters");
}

$search_parameters = [
    'term' => "restaurants",
    'location' => $address,
    'latitude' => $latitude,
    'longitude' => $longitude
];

try{
    $results = $client->getBusinessesSearchResults($search_parameters);
    $restaurants = $results->businesses;
    
    $random_restaurant = $restaurants[mt_rand(0, count($restaurants)-1)];
    
    echo print_r($random_restaurant);
} catch (Exception $e) {
    http_response_code(500);
    die("api problem");
}