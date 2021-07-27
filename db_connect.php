<?php
define('DB_USER', 'studentweb');
define('DB_PASSWORD', 'secret');

$dsn = 'mysql:host=localhost;dbname=students';
try {
  $db = new PDO($dsn, DB_USER, DB_PASSWORD);
} catch(PDOException $e) {
  $err_msg = $e->getMessage();
  include('db_error.php');
  exit();
}
?>