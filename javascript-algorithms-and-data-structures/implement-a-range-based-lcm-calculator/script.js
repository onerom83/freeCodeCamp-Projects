function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let arrAll = [];
  let i = arr[0];
  while( i <= arr[1]) {
    arrAll.push(i);
    i++;
  }
  const obtenerMCD = (a, b) => (b === 0 ? a : obtenerMCD(b, a % b));
  const obtenerMCM = (a, b) => (a * b) / obtenerMCD(a, b);
  let resultadoMCM = arrAll.reduce((acumulador, actual) => obtenerMCM(acumulador, actual));

  return resultadoMCM;
}
let arr = [1, 5];
console.log(smallestCommons(arr));