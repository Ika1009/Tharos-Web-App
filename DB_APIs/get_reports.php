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

// Prepare and execute the statement based on the user ID
try {
    if ($userID == 0) {
        // If admin, get all reports
        $stmt = $pdo->query("SELECT * FROM reports");
    } else {
        // If not admin, get reports only for that user
        $stmt = $pdo->prepare("SELECT * FROM reports WHERE user_id = :userID");
        $stmt->execute([':userID' => $userID]);
    }

    $reports = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Add the image path to each report
    foreach ($reports as &$report) {
        // Assuming your image path column in the database is named 'image'
        $imagePath = $report['image'];

        // You can add the full URL here if needed
        // Example: $imagePath = 'https://example.com/uploads/' . $imagePath;

        $report['image'] = $imagePath;
    }

    // Return the reports in JSON format
    echo json_encode(['status' => 'success', 'reports' => $reports]);
} catch (\PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
