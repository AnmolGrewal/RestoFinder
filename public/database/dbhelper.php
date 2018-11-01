<?php

function connect_to_db()
{
    $host = "localhost";
    $database = "plungercat";
    $user = "khaki";
    $password = "password";
    $connection = mysqli_connect($host, $user, $password, $database);

    if (mysqli_connect_errno())
    {
        die(mysqli_connect_error());
    }

    return $connection;
}
