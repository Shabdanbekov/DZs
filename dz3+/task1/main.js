//* Написать алгоритм переворота строки. СТАНДАРТНУЮ ФУНКЦИЮ REVERSE НЕ ИСПОЛЬЗОВАТЬ. Например: "123456789" -> "987654321"
var num = "123456789";
function objRev(str) {
  var result = [];
  for (i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join("");
}
console.log(objRev(num));
