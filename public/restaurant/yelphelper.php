<?php

require __DIR__ . '/../../vendor/autoload.php';

function get_yelp_client($api_key)
{
    if(empty($api_key))
    {
        http_response_code(422);
        die("missing api key");
    }

    $options = array(
        'apiHost' => 'api.yelp.com', // Optional, default 'api.yelp.com',
        'apiKey' => $api_key, // Required
    );
    
    $client = \Stevenmaguire\Yelp\ClientFactory::makeWith(
        $options,
        \Stevenmaguire\Yelp\Version::THREE
    );

    return $client;
}

function get_restaurant_list(&$client,  //required client object from get_yelp_client
                             $location, //required if no latitude and longitude,
                             $latitude, //required if no location
                             $longitude, //required if no location
                             $radius, //optional in meters
                             $categories, //optional type of cusine seperated by comma
                             $price) //optional 1 cheap to 4 expensive
{   
    #check to make sure we have all the variables
    if (empty($location) && (empty($latitude) || empty($longitude)))
    {
        http_response_code(422);
        die("missing parameters");
    }
    
    $search_parameters = [
        'term' => "restaurants",
        'location' => $location,
        'latitude' => $latitude,
        'longitude' => $longitude,
        'radius' => $radius,
        'categories' => $categories,
        'price' => $price
    ];
    
    try{
        $results = $client->getBusinessesSearchResults($search_parameters);
        $restaurants = $results->businesses;
        return $restaurants;
        
    } catch (Exception $e) {
        http_response_code(500);
        die($e->getMessage());
    }
}

