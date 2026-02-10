function generatePassword(longPass) {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let pass = "";
  for (let i = 0 ; i < longPass; i++) {
    pass += chars[Math.floor(Math.random() * chars.length + 1)];
  }
  return pass;
}

let password = generatePassword(8);
console.log(`Generated password: ${password}`);