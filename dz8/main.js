/* Написать приложение "Авторизация". Дизайн на ваше усмотрение. Создайте структуру фронтенд проекта с вебпаком как на уроке. В отдельном файле создайте класс User с полями логина и пароля (можно еще имя пользователя которое будет отличаться от логина). Создайте массив пользователей и при попытке войти, пройтись по массиву с пользователями и выдать сообщение об успехе если по логину и паролю он найден, а если нет то вывести сообщение о ошибке авторизации.*/
import data from "./users.json" assert { type: "json" };

let btn = document.querySelector(".login-btn");
let messNote = document.getElementById("notification");

btn.addEventListener("click", () => {
  messNote.innerHTML = "";

  var loginInput = document.getElementById("login").value;
  var passwordInput = document.getElementById("password").value;

  if (loginInput === "" || passwordInput === "") {
    messNote.innerHTML = "Введите ваши данные";
    messNote.classList.add("enterData");
    return;
  }

  if (
    data.find((user) => user.login === loginInput) &&
    data.find((user) => user.password === passwordInput)
  ) {
    messNote.innerHTML = "Вы успешно авторизовались";
    messNote.classList.add("success");
  } else {
    messNote.innerHTML = "Вы неправильно ввели логин пользователя или пароль";
    messNote.classList.add("error");
  }
});
