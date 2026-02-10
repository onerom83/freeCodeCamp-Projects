function pyramid(pattern, rows, bool) {
  let i = 1;
  let result = "\n";
  if (bool == false) {
    do {
      let spaces = " ".repeat(rows - 1);
      result += spaces + pattern.repeat(i + (i - 1)) + "\n";
      rows--;
      i++;
     } while (rows > 0)
  } else {
    do {
      let spaces = " ".repeat(i - 1);
      result += spaces + pattern.repeat(rows + (rows - 1)) + "\n";
      rows--;
      i++;
     } while (rows > 0)
  }
    return result;
}
// si bool es false, piramide normal, true invertida
// espacios al principio, pero no al final
// empezar y terminar con un \n

console.log(pyramid("*", 5, false));