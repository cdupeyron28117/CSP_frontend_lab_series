// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 2")

// Task 6
for (let i = 1; i <=10; i++) {
    console.log(i);
}
console.log("--------------------");

// Task 7
let countdown = 10;
while (countdown >= 0) {
    console.log(`T-${countdown}`);
    if (countdown == 0) {
        console.log("Liftoff!");
    }
    countdown--;
}
console.log("--------------------");

// Task 8
let base = Number(prompt("Enter a number:"));
if (isNaN(base)) {
    console.log("Please enter a number.");
} else {
    for (let x = 1; x <= 10; x++) {
        console.log(`${base} x ${x} = ${base * x}`);
    }
}
console.log("--------------------");

// Task 10
let SECRET = "explorers";
let attempts = 3;
do {
    if (prompt("Enter password:") == SECRET) {
        console.log("Correct!");
        break;
    } else {
        attempts--
        console.log(`Incorrect! Attempts left: ${attempts}`);
    }
} while (attempts > 0)
console.log("--------------------");

// CHALLENGE: I changed the countdown to include "T-(countdown)".

/* Exit Ticket
I accidentally used ' instead of ` for template literals. I fixed it by being attentative.
*/