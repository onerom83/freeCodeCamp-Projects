function sumPrimes(num) {
  if (num < 2) return 0;
  let nums = [2];

  for (let i = 3; i <= num; i += 2) {
    nums.push(i);
  }
  let numsPrimes = nums.filter(n => {
    for (let j = 2; j <= Math.sqrt(n); j++) {
      if (n % j === 0) return false;
    }
    return true;
  });

  return numsPrimes.reduce((accur, curr) => accur + curr, 0);
}
console.log(sumPrimes(2525));