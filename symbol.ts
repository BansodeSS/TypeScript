/**
 * symbol.ts
 * TypeScript Symbol Tutorial
 */

// Creating symbols
const sym1 = Symbol();
const sym2 = Symbol("description");

// Symbols are unique
console.log("sym1 === sym2:", sym1 === sym2); // false

// Using symbols as object keys
const obj = {
    [sym1]: "value1",
    [sym2]: "value2"
};

console.log("obj[sym1]:", obj[sym1]); // "value1"
console.log("obj[sym2]:", obj[sym2]); // "value2"

// Symbols are not enumerable in for...in or Object.keys
console.log("Object.keys(obj):", Object.keys(obj)); // []

// You can get symbol properties using Object.getOwnPropertySymbols
console.log("Object.getOwnPropertySymbols(obj):", Object.getOwnPropertySymbols(obj));