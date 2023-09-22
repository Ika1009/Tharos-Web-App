<?php

require 'db_conn.php';  // Include the database connection

header('Content-Type: application/json');

$email = $_POST['email'];
$password = $_POST['password'];

if (isset($email, $password)) {
    // Fetch hashed password from database
    $stmt = $pdo->prepare('SELECT password FROM users WHERE email = ?');
    $stmt->execute([$email]);

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
