/**
 * enum.ts
 * TypeScript Enum Tutorial
 *
 * Enums allow you to define a set of named constants.
 * They make code more readable and help represent a fixed set of related values.
 *
 * There are two main types:
 * 1. Numeric Enums: Members have auto-incremented numeric values starting from 0 (unless specified).
 * 2. String Enums: Members have explicit string values.
 *
 * Enums are useful for representing directions, statuses, options, etc.
 */

// Numeric enum
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

// String enum
enum Status {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING"
}

// Usage
let move: Direction = Direction.Up;
let currentStatus: Status = Status.Pending;

console.log("move:", move); // 0
console.log("Current Status:", currentStatus);
