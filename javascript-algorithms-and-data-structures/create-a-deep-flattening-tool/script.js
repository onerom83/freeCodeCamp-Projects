function steamrollArray(arr) {
 while (arr.some(Array.isArray)) {
   arr = [].concat(...arr);
 }
 return arr
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));