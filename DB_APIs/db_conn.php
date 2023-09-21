
<?php

// $host = 'localhost';
// $db   = 'tharcgyg_tharros';
// $user = 'tharcgyg_webapp';
// $pass = 'webapptharos';
// $charset = 'utf8mb4';

// $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
// $options = [
//     PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
//     PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
//     PDO::ATTR_EMULATE_PREPARES   => false,
// ];

// try {
//     $pdo = new PDO($dsn, $user, $pass, $options);
// } catch (\PDOException $e) {
//     throw new \PDOException($e->getMessage(), (int)$e->getCode());
// }

$servername = 'localhost';
$username = 'bonanza_nemanja';
$password = 'Bonanza123.';
$dbname = "bonanza_maildelivery";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error)
{
    die("connection failed: " . $conn->connect_error);
}

?>
