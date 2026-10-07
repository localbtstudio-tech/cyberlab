<?php

header("Content-Type: application/json");

require "config.php";

session_start();


if (!isset($_SESSION["user_id"])) {

    echo json_encode([
        "success" => false,
        "message" => "User is not logged in."
    ]);

    exit;
}


echo json_encode([
    "success" => true,
    "user_id" => $_SESSION["user_id"],
    "username" => $_SESSION["username"],
    "message" => "User logged in."
]);

exit;