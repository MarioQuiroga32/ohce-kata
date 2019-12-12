const { checkPalindrome } = require('../src');

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function palindrome(string) {
  console.log(checkPalindrome(string));
}

const goodBye = name => `Adios ${name}`

function isEmpty(str) {
  return (!str || 0 === str.length);
}

function listening(name) {
  readline.question(``, string => {
    if (string === "Stop!") {
      console.log(goodBye(name));
      readline.close();
    } else {
      palindrome(string);
      listening(name);
    }
  });
}


module.exports = { palindrome, goodBye, isEmpty, listening }