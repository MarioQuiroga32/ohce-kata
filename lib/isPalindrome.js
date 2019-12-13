const isPalindrome = str => {    
	if (str === str.split('').reverse().join('')) {
		return '¡Bonita palabra!';
	} else {
		return str.split('').reverse().join('');
	}
};

module.exports = { isPalindrome };