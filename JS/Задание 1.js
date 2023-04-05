<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2023 by anonymous (http://jsbin.com/posuhakuhi/4/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
/*Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

Если это число, то вывести в консоль чётное оно или нечётное.

Если передано не число, выведите: «Упс, кажется, вы ошиблись».

*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.*/

let num = +prompt('Введите число');

if (isNaN(num)) {
  
  console.log('Упс, кажется, вы ошиблись');
  
} else {
  
  if (num % 2===0){
    
    console.log('Число четное');
    
  } else {
    
    console.log('Число нечетное');
  } 
}

</script>
</body>
</html>