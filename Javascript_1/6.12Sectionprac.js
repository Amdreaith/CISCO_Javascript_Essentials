/**
 * 
Exercise 1: Write your own div function that will take two call arguments and return the result of dividing th
e first argument by the second. In JavaScript, the result of dividing by zero is the value Infinity (or -Infinity,
 if we try to divide a negative number). Change this. If you pass 0 as the second argument, your function should throw 
 a RangeError exception with the appropriate message. Prepare a test call of the 
function for both valid division and division by zero.
 * 
 */

function div(a, b) {
    if (b === 0) {
        throw new RangeError("Cannot divide by zero");
    }
    return a / b;
}
const num = 1000;
const array = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    try  {
        const result = div(num, currentElement);
        console.log(`Result of ${num} / ${currentElement} = ${result}`);
    } catch (error) {
        console.error(`Error for element ${currentElement}: ${error.message}`);
    }
}
// Test calls
console.log(div(10, 2)); // Valid division
try {
    console.log(div(10, 0)); // Division by zero, should throw an error
} catch (error) {
    console.error(`Error: ${error.message}`);
}
console.log(div(10, -2)); // Valid division with negative divisor