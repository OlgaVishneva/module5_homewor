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
//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

//Смотрите ну в первом вам надо завести переменную) и прировнять к true) и далее проходите циклом по всем элементам массива) и сверяете все с последующим [i + 1] если будет не равен то приравниваете созданую переменную к false и после цикла выводите в консоль переменную)
  
const arr = [1,3,5,5,6,8,6];
let a = 'true';
for (let i = 0; i <= arr.length-1; i++) {
   if (arr[i] !== arr[i + 1]) {
     a = 'false';
   }
}
console.log(a)
</script>
</body>
</html>