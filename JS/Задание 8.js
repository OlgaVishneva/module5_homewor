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
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.

let myMap = new Map();

myMap.set('key', 'prop');
myMap.set(1, 'prop2');
myMap.set(true, '123');

console.log(myMap.keys())
console.log(myMap)
</script>
</body>
</html>