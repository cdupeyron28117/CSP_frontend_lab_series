/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
let age = 34;
let price = 12.99;
console.log(`Age: ${age}`); // "Age: 34"
console.log("Price: " + price); // "Price: 12.99"

// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
let whatIsThis = "Sandra" / 2;
console.log(whatIsThis); // NaN

// TODO 2: Print basic math ops: + - * /
console.log(2 + 2); // 4
console.log(4 - 2); // 2
console.log(3 * 2); // 6
console.log(6 / 2); // 3

// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)
console.log(2 ** 3); // 8
console.log(7 % 2); // 1

// TODO 3: Assignment operators with score variable
let score = 10;
console.log(score); // 10
score += 2;
console.log(score); // 12
score -= 6;
console.log(score); // 6
score *= 3;
console.log(score); // 18
score /= 2;
console.log(score); // 9

// TODO 4: Expressions with operator precedence
console.log(((7 + 5) / 3) - 8); // -4
console.log(2 + 2 * 2); // 6
console.log((2 + 2) * 2); // 8

// TODO 5: Strings (single, double, backticks)
let name1 = 'Christopher Dupeyron';
let name2 = "Christopher Dupeyron";
let name3 = `Christopher Dupeyron`;
console.log(`Hello, my name is Christopher Dupeyron and I am 15 years old.`);
// "Hello, my name is Christopher Dupeyron and I am 15 years old.""

// TODO 6: String properties and methods
let greeting = "Hello there!";
// - greeting.length
console.log(greeting.length); // 12
// - charAt(0), charAt(5), [3]
console.log(greeting.charAt(0)); // "H"
console.log(greeting.charAt(5)); // " "
console.log(greeting[3]); // "l"
// - indexOf("sad")
console.log("Don't be sad, be happy!".indexOf("sad")); // 9
// - repeat()
console.log("la".repeat(5));
// - substring, substr, slice examples
console.log("Don't be sad, be happy!".substring(0, 3)); // "Don"
console.log("Don't be sad, be happy!".substr(0, 3)); // "Don"
console.log("Don't be sad, be happy!".slice(0, 3)); // "Don"

// 🚀 Stretch Goals
// - Even number check using %
let x = prompt("Insert a whole number:");
if (Number(x) % 2 == 0) {
    console.log(`${x} is even.`);
} else if (Number(x) % 2 == 1) {
    console.log(`${x} is odd.`);
} else {
    console.log("You did not input a valid whole number.");
}
// - localeCompare() example
let city1 = prompt("Name a city (all lowercase):");
let city2 = prompt("Name another city (all lowercase):");
if (city1.localeCompare(city2) == 1) {
    console.log(`${city2} comes before ${city1} alphabetically.`);
} else if (city1.localeCompare(city2) == -1) {
    console.log(`${city1} comes before ${city2} alphabetically.`);
} else {
    console.log("You inputted the same city twice!");
}