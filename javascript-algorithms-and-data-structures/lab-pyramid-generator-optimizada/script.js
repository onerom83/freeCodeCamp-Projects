function pyramid(pattern, rows, inverted) {
  let result = "\n";

  for (let i = 1; i <= rows; i++) {
    // Si es invertida, los espacios aumentan (0, 1, 2...); si no, disminuyen
    const spacesCount = inverted ? i - 1 : rows - i;
    // Si es invertida, el patrón disminuye; si no, aumenta
    const patternCount = inverted ? 2 * (rows - i) + 1 : 2 * i - 1;

    result += " ".repeat(spacesCount) + pattern.repeat(patternCount) + "\n";
  }

  return result;
}

console.log(pyramid("*", 5, false)); // Normal