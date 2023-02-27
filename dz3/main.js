// 1) Написать функцию, которая принимает 2 параметра (числа) и возвращает в консоли самый минимальный из них.//
function retMinimum(max, min) {
  var total = Math.min(max, min);
  return console.log(total);
}
retMinimum(10, 2);
//
//
//
//
//2) Написать функцию которая принимает 1 параметр в который попадает promt() и вернуть длину строки в консоли.
let promptLen = String(prompt("Shabdanbekov")).trim();
function str(pro) {
  return console.log(pro.length);
}
str(promptLen);
//
//
//
//
//3) Написать простой калькулятор при помощи функции и его параметров. Функция должна уметь вычислять: деление "/",  умножение "*", вычитание "-", сложение "+"  (делить на ноль нельзя)
let number1 = Number(prompt("First number"));
let calc = prompt("calculations (*,/,+,-)");
let number2 = Number(prompt("Second number"));

switch (calc) {
  case "*":
    alert(number1 * number2);
    break;
  case "/":
    alert(number1 / number2);
    break;
  case "+":
    alert(number1 + number2);
    break;
  case "-":
    alert(number1 - number2);
  default:
}
