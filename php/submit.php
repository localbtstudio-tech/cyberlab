<?php

header("Content-Type: application/json");


$answer = trim(strtolower($_POST["answer"] ?? ""));

$correctAnswer = "45.23.XX.XX";


if ($answer === strtolower($correctAnswer)) {

    echo json_encode([
        "correct" => true,
        "message" => "CORRECT"
    ]);

} else {

    echo json_encode([
        "correct" => false,
        "message" => "WRONG"
    ]);

}