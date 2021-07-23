<?php
//constant, no $ sign anywhere
define('PI', 3.1415);
//Math functions
//ceil(),floor(),round(),max(),min(),pow(),sqrt(),pi(),mt_rand()//faster random number,is_finite(),is_numeric().//also geom. fns.
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="text" href="P.png">
  <title>PHP sheet</title>
</head>
<body>
  <p>PI: <?php echo PI ?></p>
  <form action="index.php" method="get">
    <label for="">Your State: </label>
    <input type="text" name="state"><br>
    <label for="">Number 1: </label>
    <input type="text" name="num-1"><br>
    <input type="text">
  </form>
</body>
</html>