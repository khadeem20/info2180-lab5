<?php
header("Access-Control-Allow-Origin: *");
//header('Content-Type: text/html');
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';


$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);


if ( isset($_GET['country'])) {
  $searched= $_GET['country'];
  //$val = $_GET['country'])
  $country= filter_var($searched, FILTER_SANITIZE_STRING);
  
  $sql = "SELECT * FROM countries WHERE name LIKE '%$country%'";
  $stmt= $conn->prepare($sql);
}

else{
  $stmt = $conn->query("SELECT * FROM countries");

}




$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Debugging statements
echo "Number of rows returned: " . count($results) . PHP_EOL;
echo "Results structure: " . PHP_EOL;
var_dump($results);

?>


