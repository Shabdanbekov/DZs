// Написать функцию по обезличиванию ФИО. Функция должна заменить все символы кроме первого и последнего на знак _. Например: depersonalize(“Киселев Евгений Дмитриевич”) -> “К_____в Е_____й Д________ч”, depersonalize(“Сидоров Вова”) -> “С_____в В__а”.

let yourName = document.querySelector("#YourName");
let resultName = document.querySelector("#resultName");

yourName.addEventListener("input", (event) => {
  let yorNameValue = event.target.value;
  maskedName = (name, namechar = "_") => {
    let namePart = name.split(" ");
    let firstName = namePart;
    let resultShow = [];
    let resultString = "";
    for (let i = 0; i < firstName.length; i++) {
      let show = namePart[i];
      const maskedChars = namePart[i].length - 2;
      const maskedStr = namechar.repeat(maskedChars);
      let maskFirstName = show.substring(0, 1);
      let maskLastFirstName = show.substring(show.length - 1);
      let result = maskFirstName + maskedStr + maskLastFirstName;
      resultShow.push(result);
      resultString = resultShow.toString();
      resultName.innerHTML = resultString;
    }
    console.log(resultString);
  };
  maskedName(yorNameValue);
});
