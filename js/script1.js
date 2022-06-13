"use strict";

function sayHello(name) {
  return `Hello ${name}`;
}

console.log(sayHello('Helene'));

function returnNeighboringNumbers(num) {
  return [--num, ++num, ++num];
}
console.log(returnNeighboringNumbers(5));

function getMathResult(num1, num2) {
  if (typeof num2 != 'number' || num2 <= 0) {
    return num1;
  }
  else {
    let result = +num1;
    let x = num1;
    for (let i = 1; i < num2; i++) {
      result += '--';
      x += num1;
      result += +x;
    }
    return result;
  }
  }
console.log(getMathResult(3, 1));
