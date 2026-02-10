const countdown = (n) => {
  if (n < 1) {
    return [];
  }
  const result = countdown(n - 1);
  result.unshift(n);
  return result;
}
console.log(countdown(4));
