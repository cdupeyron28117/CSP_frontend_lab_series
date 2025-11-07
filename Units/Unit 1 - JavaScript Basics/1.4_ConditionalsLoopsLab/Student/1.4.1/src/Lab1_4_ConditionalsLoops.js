/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age = prompt("Please print your age.");

if (Number(age) <= 16) {
    console.log("Teen discount");
} else if (Number(age) >= 65) {
    console.log("Senior discount");
} else {
    console.log("No discount");
}

// TODO 2: Nested if with two numbers
let number1 = prompt("Enter Number 1");
let number2 = prompt("Enter Number 2");

if (Number(number1) == Number(number2)) {
    console.log("Numbers are equal");
} else if (Number(number1) > Number(number2)) {
    console.log("Number 1 is bigger.");
} else {
    console.log("Number 1 is smaller.");
}

// TODO 3: Switch statement for language greeting
let language = "French";

switch (language) {
    case "Spanish":
        console.log("¡Hola, mundo!");
        break;
    case "French":
        console.log("Bonjour le monde!");
        break;
    default:
        console.log("Hello, world!");
}

// TODO 4: While loop (1 to 10)
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// TODO 5: Do..while loop (1 to 5)
let x = 1;

do {
    console.log (x)
    x++;
} while (x <= 5)

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for (let y = 1; y <= 20; y++) {
    if (y === 10) {
        console.log("ten");
        continue
    } else if (y === 20) {
        console.log("twenty");
        continue
    }
    console.log(y);
}

// TODO 7: Even/Odd loop (1 to 20)
let z = 1;

while (z <= 20) {
    if (z % 2 == 0) {
        console.log(`${z} is even.`);
    } else {
        console.log(`${z} is odd.`);
    }
    z++;
}

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
let n = 20;

while (n >= 1) {
    console.log(n);
    n--;
}

// - Skip multiples of 3 in even/odd loop
let l = 0;

while (l < 20) {
    l++;
    if (l % 3 == 0) {
        continue;
    }
    if (l % 2 == 0) {
        console.log(`${l} is even.`);
    } else {
        console.log(`${l} is odd.`);
    }
}

/* EXIT TICKET
1. Switch can be more convenient than else..if statements when there are many cases involved.
2. While loops only execute while the condition is true, while do..while loops execute at least once, even if the condition is fale.
3. Break exits the loop there, and continue starts the loop over (ending one iteration).
4. I prefer while loops, because it's spaced out and easy to see what happens. For loops are too small for me.
*/