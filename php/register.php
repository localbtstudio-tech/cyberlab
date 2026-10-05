<?php

header("Content-Type: application/json");

require "config.php";


$username = trim($_POST["username"] ?? "");
$email = trim(strtolower($_POST["email"] ?? ""));
$password = $_POST["password"] ?? "";


/* ================================= */
/* VALIDATION                         */
/* ================================= */

if ($username === "" || $email === "" || $password === "") {

    echo json_encode([
        "success" => false,
        "message" => "All fields are required."
    ]);

    exit;
}


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    echo json_encode([
        "success" => false,
        "message" => "Invalid email address."
    ]);

    exit;
}


if (strlen($username) < 3) {

    echo json_encode([
        "success" => false,
        "message" => "Username must contain at least 3 characters."
    ]);

    exit;
}


if (strlen($password) < 8) {

    echo json_encode([
        "success" => false,
        "message" => "Password must contain at least 8 characters."
    ]);

    exit;
}


/* ================================= */
/* CHECK EXISTING USER               */
/* ================================= */

$sql = "
    SELECT id
    FROM users
    WHERE username = ? OR email = ?
    LIMIT 1
";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "ss",
    $username,
    $email
);

$stmt->execute();

$stmt->store_result();


if ($stmt->num_rows > 0) {

    echo json_encode([
        "success" => false,
        "message" => "Username or email already exists."
    ]);

    $stmt->close();
    exit;
}


$stmt->close();


/* ================================= */
/* HASH PASSWORD                     */
/* ================================= */

$passwordHash = password_hash(
    $passPASSWORD_DEFAULTword,
    
);


/* ================================= */
/* INSERT USER                       */
/* ================================= */

$sql = "
    INSERT INTO users
    (username, email, password_hash)
    VALUES (?, ?, ?)
";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "sss",
    $username,
    $email,
    $passwordHash
);


if ($stmt->execute()) {

    echo json_encode([
        "success" => true,
        "message" => "Account created successfully."
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Could not create account."
    ]);

}


$stmt->close();
$conn->close();