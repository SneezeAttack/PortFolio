<?php


$dbname = 'id17353316_contentdb';
$host = 'localhost';
$user = 'id17353316_nightraven';
$pass = '?mO1]*hyp8CwtC&[';
$json = [];

$query = "SELECT * FROM mediacontent WHERE mediatype='audio'";


$sql = mysqli($host, $user, $pass, $dbname);

if($sql -> connect_errno)
  die("Failed to connect: " $sql -> connect_error);

  if($result = $sql -> query($query)){
    echo "Returned rows " $result -> num_rows;

    $result -> free_result();
  }
$sql -> close();


?>
