function myReplace(str, wordMain, wordReplace) {
  const regex = /^[A-Z]/;
  regex.test(wordMain) ? wordReplace = wordReplace[0].toUpperCase() + wordReplace.slice(1): wordReplace = wordReplace[0].toLowerCase() + wordReplace.slice(1);
  return str.replace(wordMain, wordReplace);
}

console.log(myReplace("Había una vez un Oso", "Oso", "perro"));
