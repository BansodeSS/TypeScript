/**
 * strings.ts
 * TypeScript Strings Tutorial
 */

// Basic string declaration
let greeting: string = "Hello, TypeScript!";

// String concatenation
let userName: string = "Suhas";
let welcome: string = greeting + " My name is " + userName + ".";

// Template literals
let age: number = 30;
let info: string = `My name is ${userName} and I am ${age} years old.`;

// String methods
let upper: string = greeting.toUpperCase(); // "HELLO, TYPESCRIPT!"
let lower: string = greeting.toLowerCase(); // "hello, typescript!"
let greetingLength: number = greeting.length; // 18
let includesTypeScript: boolean = greeting.includes("TypeScript"); // true
let replaced: string = greeting.replace("TypeScript", "World"); // "Hello, World!"
let splitWords: string[] = greeting.split(" "); // ["Hello,", "TypeScript!"]
let char: string = greeting.charAt(0); // "H"
let index: number = greeting.indexOf("TypeScript"); // 7
let trimmed: string = "   padded string   ".trim(); // "padded string"

// String comparison
let str1: string = "apple";
let str2: string = "banana";
let isEqual: boolean = str1 === str2; // false

// Usage
console.log("greeting:", greeting);
console.log("welcome:", welcome);
console.log("info:", info);
console.log("upper:", upper);
console.log("lower:", lower);
console.log("greetingLength:", greetingLength);
console.log("includesTypeScript:", includesTypeScript);
console.log("replaced:", replaced);
console.log("splitWords:", splitWords);
console.log("char:", char);
console.log("index:", index);
console.log("trimmed:", trimmed);
console.log("isEqual:", isEqual);