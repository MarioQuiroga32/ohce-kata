const { checkPalindrome } = require('../src');

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function palindrome(string) {
  console.log(checkPalindrome(string));
}

const goodBye = name => `Adios ${name}`

function close(name) {
  goodBye(name)
}

function isEmpty(str) {
  return (!str || 0 === str.length);
}

function question(name) {
  readline.question(``, string => {
    if (string === "Stop!") {
      close(name);
      readline.close();
    } else {
      palindrome(string);
      question();
    }
  });
}


module.exports = { palindrome, close, goodBye, isEmpty, question }