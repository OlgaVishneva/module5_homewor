<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2023 by anonymous (http://jsbin.com/posuhakuhi/5/edit)

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
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

const arr = [1,4,5,6,6,7]

let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof (arr[i] == "number") && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] % 2 === 0) {
      evenCount++;
    } else if (arr[i] % 2 !== 0) {
      oddCount++;
    } else {
      otherCount++;
    }
  }
}
console.log(zeroCount)
console.log(evenCount)
console.log(oddCount)
</script>
</body>
</html>