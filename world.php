<?php
header("Access-Control-Allow-Origin: *");
//header('Content-Type: text/html');
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';


$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$city= false;

if ( isset($_GET['country'])) {
  $searched= $_GET['country'];

  $country= filter_var($searched, FILTER_SANITIZE_STRING);
  $sql = "SELECT * FROM countries WHERE name LIKE '%$country%'";
  
  if(isset($_GET['lookup'])){
    $lookup = $_GET['lookup'];
    $city = true;
    $headings = array("Name", "District", "Population");

    $stmt = $conn->query($sql);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $strResult = $results[0]['code'];

    $sql = "SELECT cities.name, cities.district, cities.population FROM cities JOIN countries ON countries.code = cities.country_code WHERE countries.code LIKE '%$strResult%'";

  }
  else{
    $headings = array("Name", "Continent", "Independence Year", "Head of State");
  }

  $stmt = $conn->query($sql);
}

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
//var_dump($results);

?>

<table>
  <tr>
    <?php foreach($headings as $heading): ?>
      <th><?=$heading; ?></th>
    <?php endforeach; ?>	
  </tr>
<?php foreach ($results as $row): ?>
  <tr>
  <?php
    if(!$city): ?>
      <td><?= $row['name']; ?></td>
      <td><?= $row['continent']; ?></td>
      <td><?= $row['independence_year']; ?></td>
      <td><?= $row['head_of_state']; ?></td>
    <?php else: ?>
      <td><?= $row['name']; ?></td>
      <td><?= $row['district']; ?></td>
      <td><?= $row['population']; ?></td>
    <?php endif; ?>
  </tr>
  <?php endforeach; ?>
</table>
