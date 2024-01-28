const string = "Hello World Namaste.";

//Two ways to create the regex
const regex1 = new RegExp("hello");
const regex2 = /World/; // searching for a word
const regex3 = /\s/; // space

/**
 * RegularExpression Object
 * 1. test - it will return true or false
 * 2. exec - it retuns array with index where the letter or world starts
 */

//test
console.log(regex1.test(string));
console.log(regex2.test(string));
//exec
console.log(regex2.exec(string));

/**
 * String method:
 * match - it retuns array with index where the letter or world starts,similar to exec method - return null if not found
 * search - it returns the index of first letter and returns -1 if not found
 * replace - it takes regex and the world which you want to replace if found else it retuns the same output
 * split - it removes the found word and coverts the remaing words into an array
 */

console.log(string.match(regex2));
console.log(string.search(regex2)); // it returns the index of first letter
console.log(string.replace(regex2, "Namaste")); //
console.log(string.split(regex2)); // it removes the found word and coverts the remaing words into an array
console.log(string.split(regex3));

/**
 * Regular Expression flags
 * g - global
 * i - case insesitive
 * m - multiline
 */

const text = "Hello EveryOne, welcome back to my youtube channel!";
const regex4 = new RegExp("t", "g");
const regex5 = /o/g;

console.log(text.match(regex4));

// console.log(regex5.exec(text));
// console.log(regex5.exec(text));
// console.log(regex5.exec(text));
// console.log(regex5.exec(text));
// console.log(regex5.exec(text));

let match = "";
while ((match = regex5.exec(text)) !== null) {
  console.log(match);
}

// regexpal.com - online regex test can be done

let input =
  "Hello Everyone, 10 Welcome Back 50.50. This is 50 the sample 15.56 regular 70 expression55.14.";
const regex6 = /\d{2}\.\d{2}/g;

console.log(regex6.exec(input));
console.log(regex6.exec(input));
console.log(regex6.exec(input));
