const { checkPalindrome } = require('../src');
const { stop } = require('../fixtures');
const { insertWord, insertYourName } = require('../fixtures');

const palindrome = string => console.log(checkPalindrome(string));

const goodBye = name => `Adios ${name}`;

const isEmpty = str => !str || 0 === str.length;

const checkIfNameIsProvide = name => {
  if (isEmpty(name)) {
    console.log(insertYourName);
    process.exit();
  }
};

const closeProcess = (name, readline) => {
  console.log(goodBye(name));
  readline.close();
}

const executeProcess = (string, name, readline) => {
  isEmpty(string) ? console.log(insertWord) : palindrome(string);
  listening(name, readline);
}

const ohceProcess = (string, name, readline) => string === stop ? closeProcess(name, readline) : executeProcess(string, name, readline);

const listening = (name, readline) => {
  readline.question(``, string => {
    ohceProcess(string, name, readline)
  });
};

module.exports = {
  palindrome,
  goodBye,
  isEmpty,
  listening,
  checkIfNameIsProvide,
  ohceProcess
};
