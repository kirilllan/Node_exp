<?php
//constant, no $ sign anywhere
//define('PI', 3.1415); echo PI;

// MATH
//ceil(),floor(),round(),max(),min(),pow(),sqrt(),pi(),mt_rand()//faster random number
//is_finite(),is_numeric(),number_format()==truncate to x decimals.//also geom. fns. 

// STRINGS
//printf("%c %d %.2f %s<br>", 65, 65.5, 65.543, 65);//data type change -> c=charCode,d=int,2 decimal place float, str
//strlen(),ltrim(),rtrim(),strtoupper(),strtolower(),ucfirst(),substr($,0,1),strpos('ab'),str_replace('yes','no',$)

// ARRAYS
//sort(),rsort(),asort(),ksort(),arsotr(),krsort(),array_key_exists('',$),in_array('',$)
//array_map('double', $list); array_reduce($list, 'mult', 1);
//array_filter($list, 'isEven'); print_r (human readable arrs);

// FUNCTIONS
function doMath($x, $y) {
  return array(
    $x + $y,
    $x - $y
  );
}
list($sum, $difference) = doMath(5, 4);
echo "Sum = $sum<br>"; echo "Difference = $difference<br>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="P.png" type="image/x-icon">
  <title>PHP sheet</title>
</head>
<body>

</body>
</html>