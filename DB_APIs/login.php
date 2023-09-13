<?php

require 'db_conn.php';  // Include the database connection

header('Content-Type: application/json');

// Check if data is provided
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Fetch hashed password from database
    $stmt = $pdo->prepare('SELECT password FROM users WHERE username = ?');
    $stmt->execute([$username]);

    if ($user = $stmt->fetch()) {
        $hashedPassword = $user['password'];

        // Verify the password against the hash
        if (password_verify($password, $hashedPassword)) {
            echo json_encode(['status' => 'success', 'message' => 'Login successful']);
            exit;
        }
    }

    echo json_encode(['status' => 'fail', 'message' => 'Invalid username or password']);
    exit;
} else {
    echo json_encode(['status' => 'error', 'message' => 'Username and password are required']);
    exit;
}
?>
