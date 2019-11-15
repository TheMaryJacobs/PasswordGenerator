/*I watched this YouTube video, and followed each step to complete the javascript for this assignment. 
I wish I didn't have to, but now things make more sense, even though we didn't cover these functions in class.*/


//DOM ELEMENTS - connect HTML elements by ID to the JS events and functions

const resultEl= document.getElementById('result');
const uppercaseEl= document.getElementById('uppercase');
const lowercaseEl= document.getElementById('lowercase');
const numbersEl= document.getElementById('numbers');
const symbolsEl= document.getElementById('symbols');
const generateEl= document.getElementById('generate');

//put below getRandom functions into an object to refer to
 randomFunc ={
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
 };


//Generator functions
//ReturnString.fromCharCode - references the browser character set value associated with 256 characters on the keyboard.

/*charset for lowercase letters a-z are 97-122 - get random letter between 
1-26, then add that array # to 97 to get into the lowercase range of characters */
function getRandomLower () {
	return String.fromCharCode(Math.floor(Math.random()*26) +97);
}

console.log(getRandomLower());

/*charset for uppercase letters a-z are 65-90 - add a random number between 
1-26, then add that array # to 65 to get into the lowercase range of characters */
function getRandomUpper () {
	return String.fromCharCode(Math.floor(Math.random()*26) +65);
}
console.log(getRandomUpper());

/*charset for numbers 0-9 are 48-57 - add a random number between 
1-10, then add that array #to 48 to get into the lowercase range of characters */
function getRandomNumber () {
	return String.fromCharCode(Math.floor(Math.random()*10) +48);
}
console.log(getRandomNumber());

/* define the string of symbols used in generator, return a random character from that string */
function getRandomSymbol () {
	const symbols = '!@#$%^&*?~';
	return symbols[Math.floor(Math.random()* symbols.length)];
}
console.log(getRandomSymbol());
//=================================================================================


