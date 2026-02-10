const generateElement = () => {
  return Math.floor(Math.random() * 100 + 1);
}
const generateArray = () => {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push(generateElement());
  }
  return array;
}
const generateContainer = () => {
  return document.createElement("div");
}
const fillArrContainer = (elHTML, arr) => {
  elHTML.innerHTML = "";
  arr.forEach((a) => {
    elHTML.innerHTML += `<span>${a}</span>`;
  });
  return elHTML;
}
const isOrdered = (int1, int2) => {
  return int1 <= int2;
}
const swapElements = (arr, index) => {
  if (!isOrdered(arr[index], arr[index + 1])) {
    // Usamos la desestructuración
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
  }
  return arr;
}
const highlightCurrentEls = (elHTML, index) => {
  const childEl = elHTML.children[index];
  const childElSup = elHTML.children[index + 1];
  
  childEl.style.border = "2px dashed red";
  childElSup.style.border = "2px dashed red";
  return elHTML;
}
const generateBtn = document.getElementById("generate-btn");
const arrayContainer = document.getElementById("array-container");
const sortBtn = document.getElementById("sort-btn")
let currentArray = [];

generateBtn.addEventListener("click", () => {
  arrayContainer.innerHTML = '<div id="starting-array"></div>'; 
  const startingArrayIni = document.getElementById("starting-array");
  currentArray = generateArray()
  startingArrayIni.innerHTML = fillArrContainer(generateContainer(), currentArray).innerHTML;
  sortBtn.removeAttribute("hidden");
});

sortBtn.addEventListener("click", () => {
  const startingArrayIni = document.getElementById("starting-array");
  highlightCurrentEls(startingArrayIni, 0);
  let isSorted = true; 
  for (let i = 0; i < currentArray.length - 1; i++) {
   
    if (!isOrdered(currentArray[i], currentArray[i + 1])) {
      isSorted = false;
      swapElements(currentArray, i);
    }
    
    if (i < currentArray.length - 2) {
        const pasoVisual = generateContainer();
        fillArrContainer(pasoVisual, currentArray);
        highlightCurrentEls(pasoVisual, i + 1); 
        arrayContainer.appendChild(pasoVisual);
    }
  }
  while (!isSorted) {
    isSorted = true;
      for (let i = 0; i < currentArray.length - 1; i++) {
        const pasoVisual = generateContainer();
        fillArrContainer(pasoVisual, currentArray);
        highlightCurrentEls(pasoVisual, i); 
        arrayContainer.appendChild(pasoVisual);
        if (!isOrdered(currentArray[i], currentArray[i + 1])) {
          isSorted = false;
          swapElements(currentArray, i);
        }
        
    }
  }
  const finalCont = generateContainer();
  fillArrContainer(finalCont, currentArray);
  finalCont.style.border = "4px solid green";
  arrayContainer.appendChild(finalCont);
  sortBtn.setAttribute("hidden", "true");
});