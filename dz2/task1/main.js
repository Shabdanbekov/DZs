let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let str = String(arr[i]);
  let con = str[0];
  if (con == 1 || con == 2 || con == 5) {
    console.log(str);
  }
}

/*1. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите в консоль только те числа из массива, которые начинаются на цифру 1, 2 или 5.
2. При помощи цикла выводить цифры в убывающем порядке от 20 до 0 
3. Написать светофор используя условную конструкцию (if else или switch case).  В зависимости от введённого цвета в promt() выводить alert(). Если ввели 'красный' то выводить 'стоп' и так далее по цветам светофора. Если ввели что либо другое то выводить alert() с подсказкой что надо вводить цвета (используйте объект для выполнения этого ДЗ в объекте должны быть ключи со значениями цветов, которые сравниваются в условных конструкциях)*/
