module.exports = (string) => {
	const currentDate = new Date();
	const currentHour = currentDate.getHours();

	if (currentHour >= 6 && currentHour <= 12) {
		return `¡Buenos días ${string}!`;
	}
	if (currentHour > 12 && currentHour <= 20) {
		return `Buenas tardes ${string}!`;
	}
	if (currentHour > 20 && currentHour < 6) {
		return `Buenas noches ${string}!`;
	}
};