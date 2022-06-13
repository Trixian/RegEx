
// Regular expression arguments (instead of string arguments) can be used in the methods above.
//Regular expressions can make your search much more powerful (case insensitive for example).`


//In JavaScript, regular expressions are often used with the two string methods: search() and replace().
//The search() method uses an expression to search for a match, and returns the position of the match.
//The replace() method returns a modified string where the pattern is replaced.

//--------------Type: Modifier----------------------------------------------------------------------------------

//Perform case-sensitive matching
let text = (`Hello people`);
let n = text.search(`people`);
console.log(`The chosen part is: ` + n + ` long.`)
document.getElementById(`n`).innerHTML = n;

//Perform case-insensitive matching
let text1 = (`Hello pEOple`);
let n1 = text1.search(/people/i);
console.log(`The chosen part is: ` + n1 + ` long.`)
document.getElementById(`n1`).innerHTML = n;

//Change a word 
function myFunction() {
let text2 = document.getElementById(`n2`).innerHTML;
document.getElementById(`n2`).innerHTML = text2.replace(`specified`, `Gorilla`);
}

//perform a global search
let text3 = (`is this all there is or is there more?`);
let n3 = text3.match(/is/g); //result
//let n3 = text.match(/^is/m); //for multiline search at the beginning of each line in a string
console.log(`The are: ` + n3 + ` in this scentence`)
document.getElementById(`n3`).innerHTML = n3;

//perform a multiline matching
let text4 = (`is this all there is or is there more?`);
let n4 = text4.match(/^is/m); //result for multiline search at the beginning of each line in a string
console.log(`The are: ` + `-` + n4 + `-` + ` in this scentence`)
document.getElementById(`n4`).innerHTML = n4;

//Do a global search for a character in a string
let text5 = (`Studying for full stack developer is a lot of work`);
let n5 = text5.match(/[s]/g);
console.log(`The chosen character is ` + n5 + ` times in this scentence.`)
document.getElementById(`n5`).innerHTML = n5;

// Type: expression
//Do a global search for digits in a line of digits
let text6 = (`0123456789`);
let n6 = text6.match(/[1-4]/g);
console.log(`The chosen digits occur ` + n6 + ` times in this line of digits.`)
document.getElementById(`n5`).innerHTML = n6;

//Do a global search for any of the specified alternatives
let text7 = (`pink, yellow, re, green, ora, orange, blue, red, pi, ble`);
let n7 = text7.match(/(red|orange|green)/g);
console.log(`The matching colors: ` + n7 + `.`)
document.getElementById(`n5`).innerHTML = n7;

//--------------Type: Metacharacter----------------------------------------------------------------------------------

//Do a global search for digits in a string:
let text8 = (`I try to study from 9 to 2 on weekdays`);
let n8 = text8.match(/\d/g);
console.log(`The present digits in this scentence are: ` + n8 + `.`)
document.getElementById(`n8`).innerHTML = n8;

//Do a global search for whitespace characters in a string
let text9 = (`I try to study on weekdays`);
let n9 = text9.match(/\s/g);
console.log(`The whitespaces in this scentence are: ` + n9 + `.`)
document.getElementById(`n9`).innerHTML = n9;

//Search for the characters "Pe" in the <b>beginning</b> (hence \b) of a word in the phrase
let text10 = (`Hello funny People`);
let n10 = text10.match(/\bPe/g);
console.log(`The found characters in this scentence are: ` + n10 + `.`)
document.getElementById(`n10`).innerHTML = n10

//Do a global search for the hexadecimal number 0057 (W) in a string
let text11 = (`Well hello funny People, What are you doing?. Hello World!`);
let n11 = text11.match(/\u0057/g);
console.log(`The Hexadecimal numbers (0057 = W) are found: ` + n11 + `.`)
document.getElementById(`n11`).innerHTML = n11;


//--------------Type: Quantifier----------------------------------------------------------------------------------

//Do a global search for at least one "o" in a string (case-insensitive)
let text12 = (`Well helloOo funny People, What are you doing?. Hello World!`);
let n12 = text12.match(/\o+/g);
console.log(`The n+ found: ` + n12 + `.`)
document.getElementById(`n11`).innerHTML = n12;

//Do a global search for an "l", followed by zero or more "o" characters
let text13 = (`back in the day Trolling was more "trolololoo`);
let n13 = text13.match(/\lo*/g);
console.log(`The n+ found: ` + n13 + `.`)
document.getElementById(`n13`).innerHTML = n13;

//Do a global search for a "1", followed by zero or one "0" characters
let text14 = (`I bring back 1, 10, to 10011 or 11010 sheep from the herd. `);
let n14 = text14.match(/10?/g);
console.log(`The n+ found: ` + n14 + `.`)
document.getElementById(`n14`).innerHTML = n14;

//----------------Method: search()-------------------------------------------------------------------------
//In JavaScript, the RegExp object is a regular expression object with predefined properties and methods.
//The test() method is a RegExp expression method (boolean: true|false.

//long method for search()
let text15 = document.getElementById(`n15`).innerHTML;
const pattern = /e/ //try q (for example) to get false
//confirming wheter there is an e in the scentence from n15
document.getElementById(`n15`).innerHTML= pattern.test(text15);

//short method for search()
// checks wheter e is in the word scentence. 
// added console.log to make result visible 
console.log(/e/.test("scentence"));

//----------------Method: exec()-------------------------------------------------------------------------
// exec() is a RegExp method, It searches a string for a specified pattern, and returns the found text as an object.
// If no match is found, it returns an empty (null) object.

let text16 = /e/.exec(`I have to think of a scentence.`);
document.getElementById(`n16`).innerHTML =
`Found ` + text16[0] + ` in position ` + text16.index + 
` in the text: ` + text16.input;