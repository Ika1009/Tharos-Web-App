<?php
require 'db_conn.php';

header('Content-Type: application/json');

// Check for the user ID in the request (either GET or POST)
$userID = $_GET['user_id'] ?? null;

// If userID is not provided, return an error response
if (!$userID) {
    echo json_encode(['status' => 'error', 'message' => 'UserID is required']);
    exit;
}

// Prepare a SQL statement to fetch reports based on userID
$stmt = $conn->prepare("SELECT * FROM reports WHERE user_id = ?");
$stmt->bind_param("i", $userID);

// Execute the statement
$stmt->execute();

// Fetch the result
$result = $stmt->get_result();
$reports = [];
while ($row = $result->fetch_assoc()) {
    $reports[] = $row;
}

// Close the statement and connection
$stmt->close();
$conn->close();

// Return the reports in JSON format
echo json_encode(['status' => 'success', 'reports' => $reports]);
?>
