const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", nullTextCheck);
textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    nullTextCheck();
  }
});

function nullTextCheck() {
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    palindromeCheck(textInput.value);
  }
}

function palindromeCheck(input) {
  const cleanInput = input.replace(/[\s\W_]+/g, '').toLowerCase();
  console.log(cleanInput);
  let reversedInput = cleanInput.split("").reverse(). join("");
  console.log("Clean Input: " + cleanInput + "\nReverse Input: " + reversedInput);
  const trueResult = " is a palindrome";
  const falseResult = " is not a palindrome";
  if (cleanInput === reversedInput) {
    result.textContent = input + trueResult;
  } else {
    result.textContent = input + falseResult;
  }
  textInput.value = "";
}
