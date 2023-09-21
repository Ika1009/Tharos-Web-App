<?php
require 'db_conn.php';

$answers = [];
$comments = [];
for ($i = 2; $i <= 111; $i++) {
    $answer = $_POST['q' . $i] ?? null;
    $comment = $_POST['comment' . $i] ?? null;
    
    $answers[] = $answer;
    $comments[] = $comment;
}

$answersJson = json_encode($answers);
$commentsJson = json_encode($comments);

// Here you could add validation for the data

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
