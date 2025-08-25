/**
 * numbers.ts
 * TypeScript Numbers Tutorial
 */

// Basic number declaration
let num: number = 42;

// Floating point numbers
let pi: number = 3.14159;

// Hexadecimal, Binary, and Octal
let hex: number = 0xff;      // 255
let binary: number = 0b1010; // 10
let octal: number = 0o744;   // 484

// Special numeric values
let infinity: number = Infinity;
let negativeInfinity: number = -Infinity;
let notANumber: number = NaN;

// Arithmetic operations
let sum: number = 10 + 5;
let difference: number = 10 - 5;
let product: number = 10 * 5;
let quotient: number = 10 / 5;
let remainder: number = 10 % 3;

// Type inference
let inferred = 123; // TypeScript infers 'number'

// Number methods
let fixed: string = pi.toFixed(2); // "3.14"
let exponential: string = num.toExponential(2); // "4.20e+1"
let parsed: number = parseInt("100", 10); // 100

// Example function using numbers
function add(a: number, b: number): number {
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
let absValue: number = Math.abs(-15); // 15
let maxValue: number = Math.max(10, 20, 30); // 30
let minValue: number = Math.min(10, 20, 30); // 10
let randomValue: number = Math.random(); // Random number between 0 and 1
let rounded: number = Math.round(3.7); // 4
let floored: number = Math.floor(3.7); // 3
let ceiled: number = Math.ceil(3.2); // 4
let power: number = Math.pow(2, 3); // 8
let sqrtValue: number = Math.sqrt(16); // 4

// Number conversion
let strToNum: number = Number("123.45"); // 123.45
let invalidNum: number = Number("abc"); // NaN

// Checking for NaN and finite numbers
let isNumFinite: boolean = Number.isFinite(100); // true
let isNumNaN: boolean = Number.isNaN(NaN); // true

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