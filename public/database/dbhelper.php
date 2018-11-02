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

function get_from_db($sql, &$connection, &$error)
{
    $data = array();

    if (!$error)
    {
        $result = mysqli_query($connection, $sql);

        if (!$result)
        {
            error("could not retrive data");
            $error = 1;
        }
        else
        {
            while($row = mysqli_fetch_assoc($result))
            {
                array_push($data, $row);
            }
        }
    }

    return $data;
}
