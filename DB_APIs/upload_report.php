<?php
require 'db_conn.php';

$userId = $_POST['user_id'] ?? null;
$facilityName = $_POST['facilityName'] ?? null;
$address = $_POST['address'] ?? null;
$neighborhood = $_POST['neighborhood'] ?? null;
$city = $_POST['city'] ?? null;
$state = $_POST['state'] ?? null;
$zip = $_POST['zip'] ?? null;
$latitude = $_POST['latitude'] ?? null;
$longitude = $_POST['longitude'] ?? null;

$answers = [];
$comments = [];
$values = [];

for ($i = 1; $i <= 111; $i++) {
    $answer = $_POST['q' . $i] ?? null;
    $comment = $_POST['comment' . $i] ?? null;

    $answers[] = $answer;
    $comments[] = $comment;
}

for ($i = 1; $i <= 5; $i++) {
    $value = $_POST['textarea' . $i] ?? null;

    $values[] = $value;
}

$answersJson = json_encode($answers);
$commentsJson = json_encode($comments);
$valuesJson = json_encode($values);

// Handling file upload
$image = $_FILES['image'] ?? null;

if ($image) {
    $relativeDir = "uploads/"; // Relative directory
    $absoluteDir = __DIR__ . "/../../uploads/"; // Absolute directory path

    // Check if directory exists, if not create it
    if (!is_dir($absoluteDir)) {
        mkdir($absoluteDir, 0755, true); // the third parameter "true" allows the creation of nested directories
    }

    $targetFile = $absoluteDir . basename($image['name']);
    if (move_uploaded_file($image['tmp_name'], $targetFile)) {
        echo "File uploaded successfully!";
        // Construct the correct relative path based on the web server's document root
        $docRoot = $_SERVER['DOCUMENT_ROOT']; // Get the document root
        $relativePath = str_replace($docRoot, '', $targetFile); // Remove the document root from the absolute path

        // Now save the relative path in the database
        $dbPath = $relativePath;
    } else {
        echo "File upload failed!";
    }
}

try {
    $stmt = $pdo->prepare("INSERT INTO reports (user_id, facilityName, address, neighborhood, city, state, zip, latitude, longitude, answers, comments, textboxValues, image) VALUES (:user_id, :facilityName, :address, :neighborhood, :city, :state, :zip, :latitude, :longitude, :answers, :comments, :values, :image)");

    $stmt->bindParam(':user_id', $userId, PDO::PARAM_INT);
    $stmt->bindParam(':facilityName', $facilityName, PDO::PARAM_STR);
    $stmt->bindParam(':address', $address, PDO::PARAM_STR);
    $stmt->bindParam(':neighborhood', $neighborhood, PDO::PARAM_STR);
    $stmt->bindParam(':city', $city, PDO::PARAM_STR);
    $stmt->bindParam(':state', $state, PDO::PARAM_STR);
    $stmt->bindParam(':zip', $zip, PDO::PARAM_STR);
    $stmt->bindParam(':latitude', $latitude, PDO::PARAM_STR);
    $stmt->bindParam(':longitude', $longitude, PDO::PARAM_STR);
    $stmt->bindParam(':answers', $answersJson, PDO::PARAM_STR);
    $stmt->bindParam(':comments', $commentsJson, PDO::PARAM_STR);
    $stmt->bindParam(':values', $valuesJson, PDO::PARAM_STR);
    $stmt->bindParam(':image', $dbPath, PDO::PARAM_STR); // bind the correct relative path to the statement

    if ($stmt->execute()) {
        echo "Report and image saved successfully!";
    } else {
        echo "Failed to execute statement";
    }
} catch (PDOException $e) {
    echo "Database error: " . $e->getMessage();
}
?>
