const addTogether = (...args) => {
  const[a, b] = args;
  if (typeof a !== "number") return undefined;
  
  if (args.length > 1) {
    if (typeof b !== "number") return undefined;
    return a + b;
  }
  return function (c) {
    if (typeof c !== "number") return undefined;
    return a + c;
  }
};
const sumTwoAnd = addTogether(50)(4);
console.log(sumTwoAnd);
