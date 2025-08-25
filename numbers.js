/**
 * numbers.ts
 * TypeScript Numbers Tutorial
 */
// Basic number declaration
var num = 42;
// Floating point numbers
var pi = 3.14159;
// Hexadecimal, Binary, and Octal
var hex = 0xff; // 255
var binary = 10; // 10
var octal = 484; // 484
// Special numeric values
var infinity = Infinity;
var negativeInfinity = -Infinity;
var notANumber = NaN;
// Arithmetic operations
var sum = 10 + 5;
var difference = 10 - 5;
var product = 10 * 5;
var quotient = 10 / 5;
var remainder = 10 % 3;
// Type inference
var inferred = 123; // TypeScript infers 'number'
// Number methods
var fixed = pi.toFixed(2); // "3.14"
var exponential = num.toExponential(2); // "4.20e+1"
var parsed = parseInt("100", 10); // 100
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
var absValue = Math.abs(-15); // 15
var maxValue = Math.max(10, 20, 30); // 30
var minValue = Math.min(10, 20, 30); // 10
var randomValue = Math.random(); // Random number between 0 and 1
var rounded = Math.round(3.7); // 4
var floored = Math.floor(3.7); // 3
var ceiled = Math.ceil(3.2); // 4
var power = Math.pow(2, 3); // 8
var sqrtValue = Math.sqrt(16); // 4
// Number conversion
var strToNum = Number("123.45"); // 123.45
var invalidNum = Number("abc"); // NaN
// Checking for NaN and finite numbers
var isNumFinite = isFinite(100); // true
var isNumNaN = isNaN(NaN); // true
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
