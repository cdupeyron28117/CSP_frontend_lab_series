// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 3")

// Task 11
for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("--------------------");

// Task 12
function isPrime(Number) {
    if (Number < 2) return false;
    for (let x = 2; x <= (Math.sqrt(Number)); x++) {
        if (Number % x === 0) return false;
    }
    return true;
}
for (let n = 1; n <= 20; n++) {
    if (isPrime(n)) {
        console.log("prime");
    } else if (n % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
console.log("--------------------");

// Task 13
let secret = Math.floor(Math.random() * 10) + 1;
let guess
do {
    guess = Number(prompt("Guess an integer from 1-10"));
    if (!isNaN(guess) && guess >= 1 && guess <= 10) {
        if (guess == secret) {
            console.log("Correct!");
        } else if (guess > secret) {
            console.log("Too high!");
        } else if (guess < secret) {
            console.log("Too low!");
        } else {
            console.log("Enter a valid number!")
        }
    }
} while (guess != secret);
console.log("--------------------");

// Task 14
for (let row = 1; row <= 4; row++) {
    console.log("*".repeat(row));
}
console.log("--------------------");

/* Exit Ticket
I thought that isPrime was a default function. I fixed this by creating the isPrime function.
*/