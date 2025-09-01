/**
 * tuple.ts
 * TypeScript Tuple Tutorial
 */

// Tuple declaration
let user: [string, number, boolean] = ["Suhas", 30, true];

// Accessing tuple elements
let userName: string = user[0];
let userAge: number = user[1];
let isActive: boolean = user[2];

// Usage
console.log("user:", user);
console.log("userName:", userName);
console.log("userAge:", userAge);
console.log("isActive:", isActive);