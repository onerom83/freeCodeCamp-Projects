function diffArray(arrA, arrB) {
  let result1 = arrA.filter(str => arrB.indexOf(str) === -1);
  let result2 = arrB.filter(str => arrA.indexOf(str) === -1);
  let result = [...result1, ...result2]
  return result;
}
const arrA = ["diamond", "stick", "apple"];
const arrB = ["stick", "emerald", "bread"];
console.log(diffArray(arrA, arrB));
