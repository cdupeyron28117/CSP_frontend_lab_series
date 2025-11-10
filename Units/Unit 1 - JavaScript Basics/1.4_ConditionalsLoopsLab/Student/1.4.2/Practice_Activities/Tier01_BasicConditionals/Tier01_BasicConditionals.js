// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 1")

// Task 1
let n = Number(prompt("Ender a number:"));
if (isNaN(n)) {
    console.log("Please enter a number.")
} else if (n % 2 == 0) {
    console.log("EVEN");
} else {
    console.log("ODD");
}

// Task 2
let score = Number(prompt("Enter your score from 0-100:"));
if (!isNaN(score) && score >= 0 && score <= 100) {
    if (score >= 90) {
        console.log("A");
    } else if (score < 90 && score >= 80) {
        console.log("B");
    } else if (score < 80 && score >= 70) {
        console.log("C");
    } else if (score < 70 && score >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
} else {
    console.log("Please enter a number from 0-100.")
}

// Task 3
let age = Number(prompt("Enter your age:"));
if (!isNaN(age)) {
    if (age >= 18) {
        console.log("You can vote!");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    console.log("Please enter a number.");
}

// Task 4
let fahrenheit = Number(prompt("Enter temperature in Fahrenheit:"));
if (!isNaN(fahrenheit)) {
    if (fahrenheit > 90) {
        console.log("Too hot!");
    } else if (fahrenheit < 60) {
        console.log("Too cold!");
    } else {
        console.log("Just right!");
    }
} else {
    console.log("Please enter a number.");
}

// Task 5
let color = prompt("Enter the color of the traffic light.").toLowerCase();
switch (color) {
    case "green":
        console.log("Go!");
        break;
    case "yellow":
        console.log("Light is changing to red soon.");
        break;
    case "red":
        console.log("Stop!");
        break;
    default:
        console.log("Please enter a valid traffic light color.");
}

/* Exit ticket:
One mistake I made was putting isNaN instead of !isNaN to validate a value. I fixed it by checking my logic.
*/