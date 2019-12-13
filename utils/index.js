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

const listening = (name, readline) => {
  readline.question(``, string => {
    if (string === stop) {
      console.log(goodBye(name));
      readline.close();
    } else {
      isEmpty(string) ? console.log(insertWord) : palindrome(string);
      listening(name, readline);
    }
  });
};

module.exports = {
  palindrome,
  goodBye,
  isEmpty,
  listening,
  checkIfNameIsProvide
};
