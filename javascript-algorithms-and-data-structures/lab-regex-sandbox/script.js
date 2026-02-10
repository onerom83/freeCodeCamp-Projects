const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
}

testButton.addEventListener("click", () => {
  const regex = new RegExp(regexPattern.value, getFlags());
  const stringText = stringToTest.innerText;
  let matched = stringText.match(regex);
  testResult.textContent = matched?.join(", ") ?? "no match"; // si matched existe
  stringToTest.innerHTML = stringText.replace(regex,`<span class="highlight">$&</span>`);
});