//* Составьте массив дней недели. С помощью цикла for выведите все дни недели со следующими правилами: будни должны быть написаны строчными буквами, а выходные заглавными. То есть на выходе должен быть массив: ["понедельник","вторник",...,"СУББОТА",....]

var days = [
  "monday",
  "tueday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
for (let i = 0; i < days.length; i++) {
  if (days[i] == "saturday" || days[i] == "sunday") {
    console.log(days[i].toUpperCase());
  } else {
    console.log(days[i]);
  }
}
