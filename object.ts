/**
 * object.ts
 * TypeScript Object Tutorial
 */

// Basic object declaration
let person: { name: string; age: number } = {
    name: "Suhas",
    age: 30
};

// Accessing properties
let personName: string = person.name;
let personAge: number = person.age;

// Usage
console.log("person:", person);
console.log("personName:", personName);
console.log("personAge:", personAge);