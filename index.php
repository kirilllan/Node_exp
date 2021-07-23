<?php
//constant, no $ sign anywhere
define('PI', 3.1415);

// MATH
//ceil(),floor(),round(),max(),min(),pow(),sqrt(),pi(),mt_rand()//faster random number
//is_finite(),is_numeric(),number_format()==truncate to x decimals.//also geom. fns. 

printf("%c %d %.2f %s<br>", 65, 65.5, 65.543, 65);//data type change -> c=charCode,d=int,2 decimal place float, str
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