// Define basic data type
interface BasicType {
    value: number;
}

// Create instance and function
const t1:BasicType= {value: 2};


// Access properties through key
console.log(t1.value); // Outputs 2

// Function example
function multiply(a: number, b: number) {
    return a * b;
}

console.log(t1.value); // Outputs 5
console.log(multiply(4, 6)); // Outputs 24