let sX = prompt("Enter the first number");
let sY = prompt("Enter the second number");
let x = Number(sX);
let y = Number(sY);
if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
    console.log(x / y);
} else {
    console.log("incorrect arguments");
}
// The code prompts the user for two numbers, converts them to numbers, and checks if they are finite and if the second number is not zero before performing division. If the conditions are not met, it logs "incorrect arguments".
// This is a good example of how to handle user input and validate it before performing operations, which is crucial in programming to avoid runtime errors and ensure the program behaves as expected.