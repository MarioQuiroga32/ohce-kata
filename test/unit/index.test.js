const { checkPalindrome } = require('../../src');
const { greeting } = require('../../lib/greetings');
const { goodBye, isEmpty, listening, ohceProcess } = require('../../utils');

const spy = jest.spyOn(global.console, 'log');

describe(' it greets you differently depending on the current time', () => {
  test('Between 20 and 6 hours, ohce will greet you saying: ¡Buenas noches < your name >!', () => {
    expect(greeting('Mario', 5)).toEqual('¡Buenas noches Mario!');
  });

  test('At 6 hours, ohce will greet you saying: ¡Buenos días < your name >!', () => {
    expect(greeting('Mario', 6)).toEqual('¡Buenos días Mario!');
  });

  test('Between 6 and 12 hours, ohce will greet you saying: ¡Buenos días < your name >!', () => {
    expect(greeting('Mario', 8)).toEqual('¡Buenos días Mario!');
  });

  test('At 12 hours, ohce will greet you saying: ¡Buenos días < your name >!', () => {
    expect(greeting('Mario', 12)).toEqual('¡Buenos días Mario!');
  });

  test('Between 12 and 20 hours, ohce will greet you saying: ¡Buenas tardes < your name >!', () => {
    expect(greeting('Mario', 16)).toEqual('¡Buenas tardes Mario!');
  });

  test('At 20 hours, ohce will greet you saying: ¡Buenas tardes < your name >!', () => {
    expect(greeting('Mario', 20)).toEqual('¡Buenas tardes Mario!');
  });
});

describe('When you introduce a palindrome', () => {
  test('oto should print ¡Bonita palabra!', () => {
    expect(checkPalindrome('oto')).toEqual('¡Bonita palabra!');
  });

  test('hola should print aloh', () => {
    expect(checkPalindrome('hola')).toEqual('aloh');
  });
});

describe('when to stop', () => {
  test('and it’ll answer Adios < your name > and end.', () => {
    expect(goodBye('Mario')).toEqual('Adios Mario');
  });
});

describe('Testing utils functions', () => {
  test('should return true for empty string', () => {
    expect(isEmpty('')).toEqual(true);
  });

  test('should return false for no empty string', () => {
    expect(isEmpty('Mario')).toEqual(false);
  });
});

describe('Testing cli', () => {
  const readline = {
    question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb('y')),
    close: jest.fn().mockImplementationOnce(() => undefined)
  };
  test('Should print ¡Bonita palabra! if the input is a palindrome', () => {
    const input1 = 'oto';
    const firstPrint = '¡Bonita palabra!';
    ohceProcess(input1, 'Mario', readline);
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenNthCalledWith(1, firstPrint);
  });

  test('Should print oiraM if the input is Mario', () => {
    const input1 = 'Mario';
    const firstPrint = 'oiraM';
    ohceProcess(input1, 'Mario', readline);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenNthCalledWith(3, firstPrint);
  });

  test('Should print Stop! if the input is Adios Mario', () => {
    const input1 = 'Stop!';
    const firstPrint = 'Adios Mario';
    ohceProcess(input1, 'Mario', readline);
    expect(console.log).toHaveBeenCalledTimes(4);
    expect(console.log).toHaveBeenNthCalledWith(4, firstPrint);
  });
});
