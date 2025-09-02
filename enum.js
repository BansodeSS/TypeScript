/**
 * enum.ts
 * TypeScript Enum Tutorial
 */
// Numeric enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// String enum
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
// Usage
var move = Direction.Up;
var currentStatus = Status.Pending;
console.log("move:", move); //
console.log("Current Status:", currentStatus);
