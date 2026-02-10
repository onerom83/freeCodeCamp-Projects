const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const textRegex = /[^a-zA-Z0-9]\s?/gi;

checkButton.addEventListener("click", () => {
  if (textInput.value === "")  alert("Please input a value");

  const cleanText = textInput.value.replace(textRegex, "").toLowerCase();

  const reverseText = cleanText.split("").reverse().join("").toLowerCase();

  console.log(cleanText)
  
  cleanText === reverseText ? result.innerHTML = `${textInput.value} is a palindrome`: result.innerHTML = `${textInput.value} is not a palindrome`;

  textInput.value = "";
});
