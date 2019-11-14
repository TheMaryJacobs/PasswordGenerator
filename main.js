/*I watched this YouTube video, and followed each step to complete the javascript for this assignment. 
I wish I didn't have to, but now things make more sense, even though we didn't cover these functions in class.*/


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

/*charset for some easy to read symbols are 33-38 - add a random number between 
1-10, then add that array # to 48 to get into the lowercase range of characters */
function getRandomSymbol () {
	return String.fromCharCode(Math.floor(Math.random()* 6) +33);
}
console.log(getRandomSymbol());



