/*Урок 5
Написать приложение "Лото". Программа должна по нажатию на кнопку генерировать случайным образом шесть чисел в диапазоне от 1 до 99.*/

let button = document.querySelector("#button");
let resNum = document.querySelectorAll(".Numb");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let mathRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return mathRandom;
}

button.addEventListener("click", function (event) {
  event.preventDefault();
  let res = [];
  for (let i = 0; i < 6; i++) {
    res.push(getRandomInt(1, 99));
  }
  resNum.forEach((numEl, idx) => {
    numEl.innerHTML = res[idx];
  });
  console.log(res);
});
