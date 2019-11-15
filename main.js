/*I watched this YouTube video, and followed each step to complete the javascript for this assignment. 
I wish I didn't have to, but now things make more sense, even though we didn't cover these functions in class.*/


//DOM ELEMENTS - Define HTML elements by ID as constant variable objects.

const resultEl= document.getElementById('result');
const lengthEl= document.getElementById('length');
const uppercaseEl= document.getElementById('uppercase');
const lowercaseEl= document.getElementById('lowercase');
const numbersEl= document.getElementById('numbers');
const symbolsEl= document.getElementById('symbols'); 
const generateEl= document.getElementById('generate');

//put getRandom functions into an object to refer to:
 randomFunc ={
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
 };

 //Create const variables for  
 //+lengthEl turns from string to number
generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

  resultEl.innerHTML = generatePassword(
	  hasLower, hasUpper, hasNumber, hasSymbol,length);

});

//Generate Password Function - passes random characters into function
function generatePassword (lower, upper, number, symbol, length) {
	// build a string to create a password
	// filter through checked boxes
	// make it the set length
	// put the password in the display box

let generatedPassword = '';

//this tells us how many boxes the user checked
const typesCount = lower + upper + number + symbol;
	console.log('typesCount: ',typesCount);

// by putting curly braces around the array types, it returns more specific info to build a new array
const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
//filter is an array method that loops through the items, and adds together the true/checked elements into an array.
(item=> Object.values(item)[0]);
	console.log('typesArr: ',typesArr)

//check if there are no boxes checked, return an alert, and do not generate password
if(typesCount === 0){
	return '';
	// alert('Please select at least one character type');
}

//call the generator function for each type, and 'for' loop it until it meets 
//the right length based on the number of checked boxes
 for (let i=0; i<length; i+= typesCount) {
	 //loop through the arrays
	 typesArr.forEach(type => {
		 const funcName = Object.keys(type)[0];
		 //take generated password string based on typesArray

		 generatedPassword += randomFunc[funcName]();
	 });
 }
//OMG LOG THAT CONSOLE GET THAT PASSWORD YO!
	console.log(generatedPassword);

	const finalPassword = generatedPassword;
//displays the generated password by changing innerHTML above on line 32
	return finalPassword;

}




//Generator/GetRandom functions
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


