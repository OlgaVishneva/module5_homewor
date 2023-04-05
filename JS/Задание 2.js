<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2023 by anonymous (http://jsbin.com/posuhakuhi/6/edit)

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
/*Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».*/
let x;
if (x = '') {
  console.log('x - строка');
} else if (x = true && false) {
  console.log('x - логический тип данных')
} 
  else if (x = 'number') {
    console.log('x - число')
} 
  else {
    console.log('x не определен')
  }
  
  
</script>
</body>
</html>