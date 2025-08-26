/**
 * numbers.ts
 * TypeScript Numbers Tutorial
 */
// Basic number declaration
let num = 42;
// Floating point numbers
let pi = 3.14159;
// Hexadecimal, Binary, and Octal
let hex = 0xff; // 255
let binary = 0b1010; // 10
let octal = 0o744; // 484
// Special numeric values
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;
// Arithmetic operations
let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;
let remainder = 10 % 3;
// Type inference
let inferred = 123; // TypeScript infers 'number'
// Number methods
let fixed = pi.toFixed(2); // "3.14"
let exponential = num.toExponential(2); // "4.20e+1"
let parsed = parseInt("100", 10); // 100
// Example function using numbers
function add(a, b) {
    return a + b;
}
// Usage
console.log("num:", num);
console.log("pi:", pi);
console.log("hex:", hex);
console.log("binary:", binary);
console.log("octal:", octal);
console.log("infinity:", infinity);
console.log("negativeInfinity:", negativeInfinity);
console.log("notANumber:", notANumber);
console.log("sum:", sum);
console.log("difference:", difference);
console.log("product:", product);
console.log("quotient:", quotient);
console.log("remainder:", remainder);
console.log("fixed:", fixed);
console.log("exponential:", exponential);
console.log("parsed:", parsed);
console.log("add(7, 5):", add(7, 5));
// Math functions
let absValue = Math.abs(-15); // 15
let maxValue = Math.max(10, 20, 30); // 30
let minValue = Math.min(10, 20, 30); // 10
let randomValue = Math.random(); // Random number between 0 and 1
let rounded = Math.round(3.7); // 4
let floored = Math.floor(3.7); // 3
let ceiled = Math.ceil(3.2); // 4
let power = Math.pow(2, 3); // 8
let sqrtValue = Math.sqrt(16); // 4
// Number conversion
let strToNum = Number("123.45"); // 123.45
let invalidNum = Number("abc"); // NaN
// Checking for NaN and finite numbers
let isNumFinite = isFinite(100); // true
let isNumNaN = isNaN(NaN); // true
// Usage
console.log("absValue:", absValue);
console.log("maxValue:", maxValue);
console.log("minValue:", minValue);
console.log("randomValue:", randomValue);
console.log("rounded:", rounded);
console.log("floored:", floored);
console.log("ceiled:", ceiled);
console.log("power:", power);
console.log("sqrtValue:", sqrtValue);
console.log("strToNum:", strToNum);
console.log("invalidNum:", invalidNum);
console.log("isNumFinite:", isNumFinite);
console.log("isNumNaN:", isNumNaN);
