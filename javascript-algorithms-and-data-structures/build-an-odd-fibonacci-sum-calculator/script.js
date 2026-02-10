function sumFibs(num) {
  let fibo = [0, 1];
  let newFibo = 0;
  let result = 0;
  do {
    newFibo = fibo[fibo.length-1] + fibo[fibo.length-2];
    fibo.push(newFibo);
  } while(newFibo < num);

  for (let fi of fibo) {
      if (fi % 2 == 0) {
        continue;
      }
      if ( fi > num) {
        break;
      }
      result += fi;
  }
  return result;
}
console.log(sumFibs());
