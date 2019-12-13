const { checkPalindrome } = require("../../src");
const { greeting } = require("../../lib/greetings");
const { goodBye, isEmpty } = require("../../utils");

describe(" it greets you differently depending on the current time", () => {
  afterAll(() => setTimeout(() => process.exit(), 1000))
  test("Between 20 and 6 hours, ohce will greet you saying: ¡Buenas noches < your name >!", () => {
    expect(greeting("Mario", 5)).toEqual("¡Buenas noches Mario!");
	});
	
	test("At 6 hours, ohce will greet you saying: ¡Buenos días < your name >!", () => {
    expect(greeting("Mario", 6)).toEqual("¡Buenos días Mario!");
  });

  test("Between 6 and 12 hours, ohce will greet you saying: ¡Buenos días < your name >!", () => {
    expect(greeting("Mario", 8)).toEqual("¡Buenos días Mario!");
	});
	

  test("At 12 hours, ohce will greet you saying: ¡Buenos días < your name >!", () => {
    expect(greeting("Mario", 12)).toEqual("¡Buenos días Mario!");
  });

  test("Between 12 and 20 hours, ohce will greet you saying: ¡Buenas tardes < your name >!", () => {
    expect(greeting("Mario", 16)).toEqual("¡Buenas tardes Mario!");
	});
	
	test("At 20 hours, ohce will greet you saying: ¡Buenas tardes < your name >!", () => {
    expect(greeting("Mario", 20)).toEqual("¡Buenas tardes Mario!");
  });
});

describe("When you introduce a palindrome", () => {
  test("oto should print ¡Bonita palabra!", () => {
    expect(checkPalindrome("oto")).toEqual("¡Bonita palabra!");
  });

  test("hola should print aloh", () => {
    expect(checkPalindrome("hola")).toEqual("aloh");
  });
});

describe("when to stop", () => {
  test("and it’ll answer Adios < your name > and end.", () => {
    expect(goodBye("Mario")).toEqual("Adios Mario");
  });
});

describe("Testing utils functions", () => {
  test("should return true for empty string", () => {
    expect(isEmpty("")).toEqual(true);
	});
	
	test("should return false for no empty string", () => {
    expect(isEmpty("Mario")).toEqual(false);
  });
});
