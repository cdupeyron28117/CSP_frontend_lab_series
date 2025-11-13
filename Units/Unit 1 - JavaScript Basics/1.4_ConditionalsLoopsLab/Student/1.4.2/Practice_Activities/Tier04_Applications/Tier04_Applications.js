// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 4")

// Task 16
let username = "Explorer";
let password = "explorers";

if ((prompt("Please enter username") === username) && (prompt("Please enter password") === password)) {
    console.log("Welcome!");
} else {
    console.log("Invalid credentials.");
}
console.log("---------------------------");

// Task 17
let weather = prompt("How's the weather? (Sunny, Rainy, or Cold?)");

switch (weather.toLocaleLowerCase()) {
    case "sunny":
        console.log("You should wear something breatheable, like a basic T-shirt and shorts.");
        break;
    case "rainy":
        console.log("You should cover up, and maybe even wear a raincoat.");
        break;
    case "cold":
        console.log("You should wear something warm, like a hoodie and joggers.");
        break;
    default:
        console.log("idk bro figure it out yourself");
}
console.log("---------------------------");

// Task 18
let balance = 100;
let decision;

while (decision !== "exit") {
    decision = prompt("Hello! Welcome to the ATM! Please choose an option -> (Deposit, Withdraw, Balance, Exit)").toLowerCase();
    switch (decision) {
        case "deposit":
            let deposit = Number(prompt("Enter how much you would like to deposit (no dollar sign, no decimals)"));
            if (!isNaN(deposit)) {
                if (deposit > 0) {
                    balance += deposit;
                    console.log(`Deposited $${deposit}!`)
                } else {
                    console.log("You cannot deposit that amount.");
                } 
            } else {
                console.log("Please input a valid amount!");
            }
            break;
        case "withdraw":
            let withdrawal = Number(prompt("Enter how much you would like to withdraw (no dollar sign, no decimals)"));
            if (!isNaN(withdrawal)) {
                if (withdrawal > balance) {
                    console.log("You don't have that much money!");
                } else {
                    balance -= withdrawal;
                    console.log(`Withdrawed $${withdrawal}!`);
                }
            } else {
                console.log("Please input a valid amount!");
            }
            break;
        case "balance":
            console.log(`Your current balance is $${balance}.`);
            break;
        case "exit":
            console.log("Thank you for using the ATM!");
            break;
        default:
            console.log("Please select a valid option.")
    }
}
console.log("---------------------------");

// Task 19

for (let i = 1; i <= 10; i++) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled a ${dice1} and a ${dice2}!`);
    if (dice1 === 1 && dice2 === 1) {
        console.log("Snake Eyes!");
    } else if (dice1 === dice2) {
        console.log("Double!");
    }
}

// I thought that isNaN was typed as `X.isNaN`. I fixed this by changing it to `isNaN(X)`.