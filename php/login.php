<?php

header("Content-Type: application/json");

require "config.php";


/* ================================= */
/* START SESSION                     */
/* ================================= */

session_start();


/* ================================= */
/* GET LOGIN DATA                    */
/* ================================= */

$email = trim(
    strtolower(
        $_POST["email"] ?? ""
    )
);

$password = $_POST["password"] ?? "";


/* ================================= */
/* VALIDATION                        */
/* ================================= */

if ($email === "" || $password === "") {

    echo json_encode([
        "success" => false,
        "message" => "Email and password are required."
    ]);

    exit;
}


/* ================================= */
/* FIND USER                         */
/* ================================= */

$sql = "
    SELECT
        id,
        username,
        password_hash
    FROM users
    WHERE email = ?
    LIMIT 1
";


$stmt = $conn->prepare($sql);


$stmt->bind_param(
    "s",
    $email
);


$stmt->execute();


$stmt->store_result();


/* ================================= */
/* USER NOT FOUND                    */
/* ================================= */

if ($stmt->num_rows === 0) {

    echo json_encode([
        "success" => false,
        "message" => "Invalid email or password."
    ]);

    $stmt->close();
    $conn->close();

    exit;
}


/* ================================= */
/* GET USER DATA                     */
/* ================================= */

$stmt->bind_result(
    $userId,
    $username,
    $passwordHash
);


$stmt->fetch();


$stmt->close();


/* ================================= */
/* VERIFY PASSWORD                   */
/* ================================= */

if (!password_verify($password, $passwordHash)) {

    echo json_encode([
        "success" => false,
        "message" => "Invalid email or password."
    ]);

    $conn->close();

    exit;
}


/* ================================= */
/* CREATE SESSION                    */
/* ================================= */

session_regenerate_id(true);


$_SESSION["user_id"] = $userId;
$_SESSION["username"] = $username;


/* ================================= */
/* SUCCESS RESPONSE                  */
/* ================================= */

echo json_encode([
    "success" => true,
    "message" => "Login successful."
]);


$conn->close();