/**
 * enum.ts
 * TypeScript Enum Tutorial
 */

// Numeric enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// String enum
enum Status {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING"
}

// Usage
let move: Direction = Direction.Left;
let currentStatus: Status = Status.Pending;

console.log("move:", move); //