
<?php

header("Content-Type: application/json");

require "config.php";

session_start();


/* ================================= */
/* CHECK AUTHENTICATION               */
/* ================================= */

if (!isset($_SESSION["user_id"])) {

    http_response_code(401);

    echo json_encode([
        "correct" => false,
        "message" => "You must log in first."
    ]);

    exit;
}


/* ================================= */
/* VALIDATE REQUEST METHOD            */
/* ================================= */

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    http_response_code(405);

    echo json_encode([
        "correct" => false,
        "message" => "Method not allowed."
    ]);

    exit;
}


/* ================================= */
/* GET DATA FROM REQUEST              */
/* ================================= */

$answer = trim(
    strtolower($_POST["answer"] ?? "")
);

$missionId = filter_input(INPUT_POST, "mission_id", FILTER_VALIDATE_INT);


/* ================================= */
/* VALIDATE INPUT                     */
/* ================================= */

if (
    $answer === "" ||
    $missionId === false ||
    $missionId === null ||
    $missionId <= 0
) {

    http_response_code(400);

    echo json_encode([
        "correct" => false,
        "message" => "Invalid request."
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

if (!$stmt) {

    http_response_code(500);

    echo json_encode([
        "correct" => false,
        "message" => "Database error."
    ]);

    exit;
}

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

    http_response_code(404);

    echo json_encode([
        "correct" => false,
        "message" => "Mission not found."
    ]);

    $stmt->close();
    $conn->close();

    exit;
}

$stmt->close();


/* ================================= */
/* CHECK ANSWER                       */
/* ================================= */

$correctAnswer = strtolower(
    trim($correctAnswer)
);

if ($answer === $correctAnswer) {

    /*
     * The server calculates the score.
     * Do not trust a score supplied by JavaScript.
     *
     * Hint usage must also be tracked and verified
     * by the server before applying a penalty.
     */

    $score = max(0, (int) $missionScore);

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

$conn->close();

?>
