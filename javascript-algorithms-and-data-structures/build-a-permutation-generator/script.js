const permuteString = (str, prefix = "", results = []) => {
  if (str.length === 0) {
    results.push(prefix);
    return results;
  }
  for (let i=0; i < str.length; i++) {
    let char = str[i];
    let remainingStr = str.slice(0, i) + str.slice(i + 1);
    permuteString(remainingStr, prefix + char, results);
  }
  return [...new Set(results)];
}
console.log(permuteString("far"))
