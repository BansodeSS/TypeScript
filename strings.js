/**
 * strings.ts
 * TypeScript Strings Tutorial
 */
// Basic string declaration
var greeting = "Hello, TypeScript!";
// String concatenation
var userName = "Suhas";
var welcome = greeting + " My name is " + userName + ".";
// Template literals
var age = 30;
var info = "My name is ".concat(userName, " and I am ").concat(age, " years old.");
// String methods
var upper = greeting.toUpperCase(); // "HELLO, TYPESCRIPT!"
var lower = greeting.toLowerCase(); // "hello, typescript!"
var greetingLength = greeting.length; // 18
var includesTypeScript = greeting.includes("TypeScript"); // true
var replaced = greeting.replace("TypeScript", "World"); // "Hello, World!"
var splitWords = greeting.split(" "); // ["Hello,", "TypeScript!"]
var char = greeting.charAt(0); // "H"
var index = greeting.indexOf("TypeScript"); // 7
var trimmed = "   padded string   ".trim(); // "padded string"
// String comparison
var str1 = "apple";
var str2 = "banana";
var isEqual = str1 === str2; // false
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
