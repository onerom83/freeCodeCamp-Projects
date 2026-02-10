const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
textInput.addEventListener("input", () => {
  textInput.value = textInput.value.slice(0, 50);
  const counter = textInput.value.length;
  charCount.style.color = counter >= 50 ? "red" : "black";
  charCount.textContent = `Character Count: ${counter}/50`;
});