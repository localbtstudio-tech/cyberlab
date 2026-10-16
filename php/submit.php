
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

    // Get the authenticated user's ID from the session.

    $userId = (int) $_SESSION["user_id"];

    // Calculate the score on the server.

    $score = max(0, (int) $missionScore);


    /* ================================= */
    /* SAVE USER PROGRESS                */
    /* ================================= */

    $saveSql = "
        INSERT INTO user_progress (
            user_id,
            mission_id,
            score
        )
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE
            score = user_progress.score
    ";

    $saveStmt = $conn->prepare($saveSql);

    if (!$saveStmt) {

        http_response_code(500);

        echo json_encode([
            "correct" => false,
            "message" => "Could not save progress."
        ]);

        $conn->close();
        exit;
    }

    $saveStmt->bind_param(
        "iii",
        $userId,
        $missionId,
        $score
    );

    if (!$saveStmt->execute()) {

        http_response_code(500);

        echo json_encode([
            "correct" => false,
            "message" => "Could not save progress."
        ]);

        $saveStmt->close();
        $conn->close();
        exit;
    }

    $saveStmt->close();


    /* ================================= */
    /* GET SAVED SCORE                   */
    /* ================================= */

    $scoreSql = "
        SELECT score
        FROM user_progress
        WHERE user_id = ?
          AND mission_id = ?
        LIMIT 1
    ";

    $scoreStmt = $conn->prepare($scoreSql);

    if (!$scoreStmt) {

        http_response_code(500);

        echo json_encode([
            "correct" => false,
            "message" => "Could not retrieve saved score."
        ]);

        $conn->close();
        exit;
    }

    $scoreStmt->bind_param(
        "ii",
        $userId,
        $missionId
    );

    $scoreStmt->execute();

    $scoreStmt->bind_result($savedScore);

    if (!$scoreStmt->fetch()) {

        http_response_code(500);

        echo json_encode([
            "correct" => false,
            "message" => "Progress record not found."
        ]);

        $scoreStmt->close();
        $conn->close();
        exit;
    }

    $scoreStmt->close();


    /* ================================= */
    /* RETURN RESULT                     */
    /* ================================= */

    echo json_encode([
        "correct" => true,
        "message" => "CORRECT",
        "score" => (int) $savedScore
    ]);

} else {

    echo json_encode([
        "correct" => false,
        "message" => "WRONG"
    ]);

}
