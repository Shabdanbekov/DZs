let inputNum = document.querySelector("#card-number");

inputNum.addEventListener("input", (event) => {
  const cardNumber = event.target.value;
  const maskedCardNumber = maskCard(cardNumber);
  event.target.value = maskedCardNumber;
});

var maskCard = (cardNumber, maskChar = "*") => {
  const maskedChars = cardNumber.length - 10;
  const maskedStr = maskChar.repeat(maskedChars);
  const visibleStart = cardNumber.substring(0, 6);
  const visibleEnd = cardNumber.substring(cardNumber.length - 4);
  return visibleStart + maskedStr + visibleEnd;
};
