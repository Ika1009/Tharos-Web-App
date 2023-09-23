<?php
require 'db_conn.php';

header('Content-Type: application/json');

// Check for the user ID in the request (either GET or POST)
$userID = $_GET['user_id'] ?? null;

// If userID is not provided, return an error response
if ($userID === null) {
    echo json_encode(['status' => 'error', 'message' => 'UserID is required']);
    exit;
}

// Check if user ID is 0 (admin)
if ($userID == 0) {
    // If admin, get all reports
    $stmt = $conn->prepare("SELECT * FROM reports");
} else {
    // If not admin, get reports only for that user
    $stmt = $conn->prepare("SELECT * FROM reports WHERE user_id = ?");
    $stmt->bind_param("i", $userID);
}

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
