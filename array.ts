/**
 * array.ts
 * TypeScript Array Tutorial
 */

// Basic array declaration
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "cherry"];

// Array methods
let first: number = numbers[0];
let length: number = fruits.length;
let joined: string = fruits.join(", ");
let mapped: number[] = numbers.map(n => n * 2);

// Usage
console.log("numbers:", numbers);
console.log("fruits:", fruits);
console.log("first:", first);
console.log("length:", length);
console.log("joined:", joined);
console.log("mapped:", mapped);