/**
 * Exercise 2: The following array of numbers has been declared:


let numbers = [10, 40, 0, 20, 50];
Write a program that, in a loop, divides the number 1000 by successive
 elements of the numbers array, displaying the result of each division.
  To divide the numbers, use the function from the previous task. Use the
   try...catch construction to handle an exception thrown in the case of 
   division by zero. If such an exception is caught, the program should print 
   an appropriate message (taken from the exception) 
and continue its operation (division by successive elements of the array).
 */

function div(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

let numbers = [10, 40, 0, 20, 50];

for (let i = 0; i < numbers.length; i++) {
    let result;
    try {
        result = div(1000, numbers[i]);
    } catch (e) {
        result = e.message;
    }
    console.log(`Result of 1000 / ${numbers[i]} = ${result}`);
}