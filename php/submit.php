<?php

header("Content-Type: application/json");

require "config.php";


/* ================================= */
/* GET DATA FROM REQUEST              */
/* ================================= */

$answer = trim(strtolower($_POST["answer"] ?? ""));
$missionId = (int) ($_POST["mission_id"] ?? 0);
$hintsUsed = (int) ($_POST["hints_used"] ?? 0);


/* ================================= */
/* VALIDATE INPUT                     */
/* ================================= */

if ($answer === "" || $missionId <= 0) {

    echo json_encode([
        "correct" => false,
        "message" => "Invalid request"
    ]);

    exit;
}


/* ================================= */
/* GET MISSION DATA                   */
/* ================================= */

$sql = "
    SELECT
        q.correct_answer,
        m.points,
        m.hint_penalty
    FROM questions q
    INNER JOIN missions m
        ON q.mission_id = m.id
    WHERE q.mission_id = ?
    LIMIT 1
";


$stmt = $conn->prepare($sql);

$stmt->bind_param("i", $missionId);

$stmt->execute();

$stmt->bind_result(
    $correctAnswer,
    $missionScore,
    $hintPenalty
);


/* ================================= */
/* CHECK IF MISSION EXISTS            */
/* ================================= */

if (!$stmt->fetch()) {

    echo json_encode([
        "correct" => false,
        "message" => "Mission not found"
    ]);

    $stmt->close();
    exit;
}


$stmt->close();


/* ================================= */
/* CHECK ANSWER                       */
/* ================================= */

$correctAnswer = strtolower(trim($correctAnswer));


if ($answer === $correctAnswer) {

    $hintsUsed = max(0, $hintsUsed);

    $score = max(
        0,
        $missionScore - ($hintsUsed * $hintPenalty)
    );


    echo json_encode([
        "correct" => true,
        "message" => "CORRECT",
        "score" => $score
    ]);

} else {

    echo json_encode([
        "correct" => false,
        "message" => "WRONG"
    ]);

}