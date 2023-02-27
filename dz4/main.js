let increase = document.getElementById("plus");
let reset = document.getElementById("reset");
let decrease = document.getElementById("minus");
let resultId = document.getElementById("result");

increase.addEventListener("click", function () {
  let val = Number(resultId.innerHTML);
  val += 1;
  resultId.innerHTML = val;
  if (val > 0) {
    resultId.style.color = "green";
  }
});

reset.addEventListener("click", function () {
  let val = Number(resultId.innerHTML);
  val = 0;
  resultId.innerHTML = val;
  resultId.style.color = "gray";
});

decrease.addEventListener("click", function () {
  let val = Number(resultId.innerHTML);
  val -= 1;
  resultId.innerHTML = val;
  if (val < 0) {
    resultId.style.color = "red";
  }
});
