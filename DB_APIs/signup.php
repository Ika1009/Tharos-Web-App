<?php

require 'db_conn.php';  // Include the database connection

header('Content-Type: application/json');

// Check if data is provided
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // First, check if the username already exists
    $stmt = $pdo->prepare('SELECT username FROM users WHERE username = ?');
    $stmt->execute([$username]);

    if ($stmt->fetch()) {
        echo json_encode(['status' => 'error', 'message' => 'Username already exists']);
        exit;
    }

    // If username doesn't exist, proceed with registration
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    $stmt->execute([$username, $hashedPassword]);

    echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
    exit;

} else {
    echo json_encode(['status' => 'error', 'message' => 'Username and password are required']);
    exit;
}

?>
