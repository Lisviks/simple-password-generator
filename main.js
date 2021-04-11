const generatorForm = document.querySelector('.generator-form');
const passwordText = document.querySelector('.password');

const chars = ['@', '.', ',', '?', '!'];

function convertAscii(asciiNum) {
  return String.fromCharCode(asciiNum);
}

function populateArrayWithChars(array, asciiFrom, asciiTo) {
  for (let i = asciiFrom; i <= asciiTo; i++) {
    const char = convertAscii(i);
    array.push(char);
  }
}

populateArrayWithChars(chars, 97, 122); // a-z
populateArrayWithChars(chars, 65, 90); // A-Z
populateArrayWithChars(chars, 48, 57); // 0-9

function getRandomChar() {
  const randomNum = Math.floor(Math.random() * (chars.length - 1));
  return chars[randomNum];
}

function generatePassword(passLength) {
  let password = '';
  for (let i = 0; i < passLength; i++) {
    password += getRandomChar();
  }
  return password;
}

generatorForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const passLength = parseInt(generatorForm['password-length'].value);
  const password = generatePassword(passLength);
  passwordText.textContent = password;
});
