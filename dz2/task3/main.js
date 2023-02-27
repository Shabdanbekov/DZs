//3. Написать светофор используя условную конструкцию (if else или switch case).  В зависимости от введённого цвета в promt() выводить alert(). Если ввели 'красный' то выводить 'стоп' и так далее по цветам светофора. Если ввели что либо другое то выводить alert() с подсказкой что надо вводить цвета (используйте объект для выполнения этого ДЗ в объекте должны быть ключи со значениями цветов, которые сравниваются в условных конструкциях)

for (x = 0; x < 3; x++) {
  var keys = {
    red: "Stop!",
    yellow: "Wait",
    green: "Go!",
  };
  let newKey = Object.keys(keys);
  let arg = prompt("Choose the color");
  //
  //
  switch (arg) {
    case newKey[0]:
      alert(keys.red);
      break;

    case newKey[1]:
      alert(keys.yellow);
      break;

    case newKey[2]:
      alert(keys.green);
      break;
    default:
      alert("Hey Bro, pick a color!");
      continue;
  }
}
