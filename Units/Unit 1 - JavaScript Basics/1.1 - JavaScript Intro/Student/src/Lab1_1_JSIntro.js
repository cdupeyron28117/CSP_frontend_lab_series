/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Christopher Dupeyron");

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak";
console.log(favoriteFood);
favoriteFood = "Pizza";
console.log(favoriteFood);

// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Hello";
console.log("Value: ",mystery," Type: ",typeof mystery);
mystery = 42;
console.log("Value: ",mystery," Type: ",typeof mystery);

// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Christopher Columbus High School";
console.log(schoolName);
/* schoolName = "St. Brendan High School"
console.log(schoolName) */

// TODO 5: Create three valid camelCase variables and print them
let thisIsCamelCase = 1;
let notPascalCase = 2;
let andDefinitelyNotKebabCase = 3;
console.log(thisIsCamelCase, notPascalCase, andDefinitelyNotKebabCase);

// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
let age = 15;
console.log("I am " + age + " years old.");

// - Repeat using template literals
console.log(`I am ${age} years old.`);

/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
      I learned about the rules of naming and declaring variables, as well as the use of
      string concatenation and template literals.
      
   2. What challenges did you encounter, and how did you solve them?
      I was trying to display ```console.log("I am ", age, " years old")``` butthere was
      a weird space inbetween the age and the text. I found out that using ```+``` gets rid of the space.
      
   3. Where else could this programming concept be useful?
      The concept of variables is used in almost any program language that requires the storage of information.
      For example, it is used commonly in video games programmed in C#.
   =========================================================== */
