<?php
require 'db_conn.php';

// !!!!
// This example assumes you have a reports table with two columns answers and comments. 
// Both columns are expected to store the data as JSON strings. 
// This way, you keep all answers and comments related to a single report together.

// Collect answers and comments
$answers = [];
$comments = [];
for ($i = 2; $i <= 111; $i++) {
    $answer = $_POST['q' . $i] ?? null;
    $comment = $_POST['comment' . $i] ?? null;
    
    $answers[] = $answer;
    $comments[] = $comment;
}

// Convert arrays to JSON strings for storage
$answersJson = json_encode($answers);
$commentsJson = json_encode($comments);

// Insert into the database
$stmt = $conn->prepare("INSERT INTO reports (answers, comments) VALUES (?, ?)");
$stmt->bind_param("ss", $answersJson, $commentsJson);
if ($stmt->execute()) {
    echo "Report saved successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>
