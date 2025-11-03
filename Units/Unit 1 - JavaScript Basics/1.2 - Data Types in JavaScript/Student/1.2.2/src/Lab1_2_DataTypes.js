/* ===========================================================
   Lab 1.2 – Data Types
   Primitive types, literals, typeof, and basic conversions.
   =========================================================== */

// TODO 1: Declare one variable for each primitive type discussed in the PDF.
// string, number, boolean, null, undefined
let s = "String"; // = string
let n = 1; // = number
let b = true; // = boolean
let z = null; // = null
let u; // (leave undefined)

// TODO 2: Use typeof to log each variable's type.
console.log(`Variable s has the data type ${typeof s}.`);
console.log(`Variable n has the data type ${typeof n}. (no it doesn't)`);
console.log(`Variable b has the data type ${typeof b}.`);
console.log(`Variable z has the data type ${typeof z}.`);
console.log(`Variable u has the data type ${typeof u}.`);

// TODO 3: Show string concatenation vs numeric addition using "5" and 5.
console.log("5" + "5");
console.log("5" + 5);
console.log(5 + 5);

// TODO 4: Explicit conversions using Number(), String(), Boolean()
console.log(Number("5"));
console.log(Boolean(""));
console.log(String(9));

// TODO 5: NaN and isNaN: demonstrate a case where conversion fails.
console.log(Number("Hello"));
console.log(isNaN("Hello"));
console.log(isNaN("three"));

// TODO 6: Template literals: print a line that mixes text + a variable value.
let age = 14;
console.log(`I am ${age} years old.`);

// Stretch Goals
console.log(parseInt("10px"));
console.log(Number("10px"));

console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean("false"));

/* ===========================================================
   🎟 EXIT TICKET
   1. Which data type(s) did you use today and why?
   We used data types String, Number, Boolean, null, and undefined.
   2. Where did you encounter type conversion (implicit or explicit)?
   We encountered explicit type conversions (Number(), String(), Boolean()) as well as implicit type conversions (string concatenation).
   3. One misconception I corrected or a tip I learned:
   Although console.log(typeof null) prints object, null is not an object.
   4. What would you try next time to debug faster?
   Nothing, I think I did pretty good.
   =========================================================== */
