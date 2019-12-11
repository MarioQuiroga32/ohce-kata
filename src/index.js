
const greeting = (string) => {
	const currentDate = new Date();
	const currentHour = currentDate.getHours();

	if(currentHour >= 6 && currentHour <= 12) {
		return `¡Buenos días ${string}!`;
	}
	if (currentHour > 12 && currentHour <= 20) {
		return `Buenas tardes ${string}!`;
	}
	if (currentHour > 20 && currentHour < 6) {
		return `Buenas noches ${string}!`;
	}
};

const isPalindrome = (str) => {
	if (str == str.split('').reverse().join('')) {
		return '¡Bonita palabra!';
	} else {
		return str.split('').reverse().join('');
	}
};

const userName = process.env.USER || '';

const ohce = (str) => {
	console.log(str);
	if(str === 'Stop!') {
		return `Adios ${userName}!`;
	} else if (str == str.split('').reverse().join('')) {
		return '¡Bonita palabra!';
	} else {
		return str.split('').reverse().join('');
	}
};



const init = () => {
	console.log(greeting(userName));
	console.log(isPalindrome('racecar'));	
};

init();

module.exports = { greeting, ohce };