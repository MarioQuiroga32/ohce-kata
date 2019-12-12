const isPalindrome = (str, username) => {    
	if (str === str.split('').reverse().join('')) {
		return '¡Bonita palabra!';
	} else if (str === 'Stop!') {
		return `Adios ${username}`;
	} else {
		return str.split('').reverse().join('');
	}
};

module.exports = { isPalindrome };