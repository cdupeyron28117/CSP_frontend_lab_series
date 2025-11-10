/* ===========================================================
   Lab 1.4 – Conditionals and Loops
   Practicing conditional statements and loops.
   =========================================================== */

// TODO: Part A – Conditionals
// 1. Create a variable 'temperature' and assign a number value.

// 2. Write an if/else statement that prints:
//    - "It's hot!" if temperature > 85
//    - "It's mild." if between 60 and 85
//    - "It's cold!" otherwise
// 3. Add an else-if for exactly 100 that prints "Boiling point!"
// 4. Create a variable 'grade' (A–F) and print "Pass" if grade is not F.
// 5. Reflect in a comment: Why is the order of conditions important?
let temperature = 72;
if (temperature == 100) { 
   console.log("Boiling hot!")
} else if (temperature > 85) {
   console.log("It's hot!");
} else if (temperature >= 60 && temperature <= 85) {
   console.log("It's mild.");
} else {
   console.log("It's cold!");
}
let grade = "A";
if (grade !== "F") {
   console.log("Pass");
} else {
   console.log("Fail");
}
// The order of the if..else statements and the nested if statements matter because it goes from top down. For example, if temperature = 100 wasn't the first condition, then "It's hot!" would have been printed.

// TODO: Part B – Loops
// 6. Write a for loop that counts from 1–5 and prints each number.
// 7. Write a while loop that counts down from 3 to 1, printing each number.
// 8. Add a loop that prints only even numbers from 2–10.
// 9. Use break to stop a loop early when i == 5.
// 10. Reflect in a comment: Which loop felt easier and why?
for (let y = 1; y <= 5; y++) {
   console.log(y);
}
console.log("---------------------------")
let x = 3;
while (x >= 1) {
   console.log(x);
   x--;
}
console.log("---------------------------")
for (let n = 1; n <= 10; n++) {
   if (n % 2 == 0) {
      console.log(n);
   }
}
console.log("---------------------------")
for (let i = 1; i <= 10; i++) {
   if (i == 5) {
      break;
   }
   console.log(i);
}
// For loops are beginning to grow on me. I actually quite like how terse they are.

// STRETCH GOALS
// Nested loop to print 3x3 grid of *

// Modify temperature to include humidity
let humidity = 70
if (temperature == 100) { 
   console.log("Boiling hot!")
} else if (temperature > 85) {
   console.log("It's hot!");
} else if (temperature >= 60 && temperature <= 85) {
   console.log("It's mild.");
} else {
   console.log("It's cold!");
}
if (humidity > 65) {
   console.log("It's humid!");
} else if (humidity >= 45 && humidity <= 65) {
   console.log("It's temperate.");
} else {
   console.log("It's arid!");
}
/* ===========================================================
   🎟 EXIT TICKET
   1. Which conditional structure felt most natural (if/else vs else if)?
   There's a difference?
   2. What’s one situation where you’d use a while loop instead of a for loop?
   A while loop may be preferable if the number of iterations needed is not known beforehand.
   3. Describe a real-world process that could be modeled with a loop.
   The work day can be modeled with a loop:

   for (let time = 9; time >= 17; time++) {
      if (time == 9) {
         console.log("Clocking in!");
      } else if (time == 11) {
         console.log("Lunch break!");
      } else if (time == 17) {
         console.log("Clocking out!");
      } else {
         console.log("Working...")
      }
   }
   =========================================================== */