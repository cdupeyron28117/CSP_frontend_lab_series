/* 
 Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)
*/

// TODO 1: Booleans
// - Create isStudent = true, hasLicense = false
let isStudent = true;
let hasLicense = false;
// - Print results of true || false, true && false, !true
console.log(true || false);
console.log(true && false);
console.log(!true);

// TODO 2: Short-circuit evaluation
// - Print result of false && (5 > 2)
console.log(false && (5 > 2)); // This prints false, because as long as one expression is false in an AND statement, it will always be false.
// - Print result of true || (2 > 5)
console.log(true || (2 > 5)); // This prints true, because as long as one expression is true in an OR statement, it will always be true.

// TODO 3: Undefined
// - Declare variable grade and print it
let grade;
console.log(grade); // This prints undefines, because we did not define grade.

// TODO 4: Null
// - Create city = null, print it
let city = null;
console.log(city);
// - Reassign city = "Miami" and print again
city = "Miami";
console.log(city);

// TODO 5: Immutability
// - Create word = "hello"
let word = "hello";
// - Try word[0] = "H", print word
word[0] = "H";
console.log(word); // This prints hello because values are immutable, hello will always equal hello.
// - Reassign word = "Hello" and print again
word = "Hello";
console.log(word); // This prints Hello because variables are mutable.

// 🚀 Stretch Goals
// - Check if number is between 10 and 20 using &&
let x = prompt("Insert a number.");
if ((10<x) && (x<20)) {
    console.log(`${x} is between 10 and 20.`);
} else {
    console.log(`${x} is not between 10 and 20.`);
}
// - Check if city is "Miami" or "Berlin" using ||
let city2 = prompt("Enter a city (capitalize first letter).");
if ((city2 == "Miami") || (city2 == "Berlin")) {
    console.log("The city you entered is either Miami or Berlin.");
} else {
    console.log("The city you entered is neither Miami nor Berlin.");
}

/* EXIT TICKET:

1. null is an intentional declaration for a variable that will be reassigned later, or if a value is to be cleared. Undefined is an undeclared variable.
2. Immutability means that it cannot be changed. For example, primitive values are immutable while variables are mutable.
3. Short-circuit evaluation is useful because it allows you to come to a conclusion about the result of an expression quicker.
4. && seems the most useful, as it is only true if all conditions are met.
*/