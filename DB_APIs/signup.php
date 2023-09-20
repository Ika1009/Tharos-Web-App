<?php

require 'db_conn.php';  // Include the database connection

header('Content-Type: application/json');

$email = $_POST['email'];
$password = $_POST['password'];
$firstName = $_POST['first_name']; 
$lastName = $_POST['last_name'];

// Check if data is provided
if (isset($email, $password, $firstName, $lastName)) {
    // First, check if the email already exists
    $stmt = $pdo->prepare('SELECT email FROM users WHERE email = ?');
    $stmt->execute([$email]);

    if ($stmt->fetch()) {
        echo json_encode(['status' => 'error', 'message' => 'Email already exists']);
        exit;
    }

    // If email doesn't exist, proceed with registration
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare('INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)');
    $stmt->execute([$email, $hashedPassword, $firstName, $lastName]);

    echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
    exit;

} else {
    echo json_encode(['status' => 'error', 'message' => 'Email and password are required']);
    exit;
}

?>
