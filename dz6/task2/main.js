//* Написать функцию капитализации строк. Например: capitalizeString("ЕВГЕНИЙ") -> "Евгений"; capitalizeString("иВАНОВ") -> "Иванов"; Капитализация - это процесс преобразования строки, когда первая буква становится заглавной, а остальные строчными.

var ucFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

console.log(ucFirst("shaBDANBEKOV"));
