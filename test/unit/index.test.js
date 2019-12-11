const ohce = require('../../src'); 

describe(' it greets you differently depending on the current time', () => {

	test('Between 20 and 6 hours, ohce will greet you saying: ¡Buenas noches < your name >!', () => {
		expect(ohce('ohce Mario')).toEqual('¡Buenas noches Mario!');
	});
  
	test('Between 6 and 12 hours, ohce will greet you saying: ¡Buenos días < your name >!', () => {
		expect(ohce('ohce Mario')).toEqual('¡Buenos días Mario!');
	});
  
	test('Between 12 and 20 hours, ohce will greet you saying: ¡Buenas tardes < your name >!', () => {
		expect(ohce('ohce Mario')).toEqual('¡Buenas tardes Mario!');
	});
});