/*Урок 7
 * Написать приложение "Таймер на 1 мин". Приложение должно отсчитывать ровно 1 минуту. У приложения должны быть 2 кнопки: старт и стоп. Также реализовать песочные часы, которые будут вращаться пока работает таймер. Дизайн на ваше усмотрение*/

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let timerDisplay = document.querySelector("#timer");
let saat = document.querySelector(".oclock");
let stoyMraz;
let isRunning = false;
let i = 60;

const anim = () => {
  saat.classList.add("watch");
};
const animStop = () => {
  saat.classList.remove("watch");
};

function startTimer() {
  stoyMraz = setInterval(function () {
    let res = i--;
    anim();
    timerDisplay.innerHTML = res;
    if (i < 0) {
      clearInterval(stoyMraz);
      animStop();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(stoyMraz);
  i = 60;
  timerDisplay.innerHTML = i;
  animStop();
}

startBtn.addEventListener("click", () => {
  if (isRunning) {
    resetTimer();
  }
  isRunning = true;
  startTimer();
});

stopBtn.addEventListener("click", () => {
  clearInterval(stoyMraz);
  isRunning = false;
  animStop();
});
