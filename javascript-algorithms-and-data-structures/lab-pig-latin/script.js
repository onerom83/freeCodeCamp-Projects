function translatePigLatin(str) {
  const regex = /^[^aeiou]+/i;
  const solution = regex.test(str) ? str.replace(regex,"") + str.match(regex) + "ay" : str + "way";
  return solution;
}
console.log(translatePigLatin("ff"));