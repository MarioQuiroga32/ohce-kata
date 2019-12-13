const { checkPalindrome } = require("../src");
const { stop } = require('../fixtures'); 

function palindrome(string) {
  console.log(checkPalindrome(string));
}

const goodBye = name => `Adios ${name}`;

const isEmpty = str => !str || 0 === str.length;

function listening(name, readline) {
  readline.question(``, string => {
    if (string === stop) {
      console.log(goodBye(name));
      readline.close();
    } else {
      isEmpty(string) ? console.log('Insert a word') : palindrome(string);
      listening(name, readline);
    }
  });
}

module.exports = { palindrome, goodBye, isEmpty, listening };
