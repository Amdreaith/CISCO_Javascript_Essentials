/* Exercise 3: Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character
 representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. 
 If the user input is invalid, display a message that informs the user that an error has occurred.

Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if
 you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.
*/

let firstNumber = prompt("Enter the first number: ");
let secondNumber = prompt("Enter the second number: ");
let operation = prompt("Enter an operation (+, -, *, /): ");
let result;

if (Number.isNaN(Number(firstNumber)) || Number.isNaN(Number(secondNumber))) {
    console.log("Error: One or both of the inputs are not valid numbers.");
}
else {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    switch (operation) {
        case "+": {
            result = firstNumber + secondNumber;
            console.log('Result: ' + result);
            break;
        }
        case "-": {
            result = firstNumber - secondNumber;
            console.log('Result: ' + result);
            break;
        }
          case "*":
            result = firstNumber * secondNumber;
            console.log('Result: ' + result);
            break;
        case "/": {
            if (secondNumber === 0) {
                console.log("Error : Division by zero is not allowed.");
            }
            else {
                result = firstNumber / secondNumber;
                console.log('Result: ' + result);
            }
            break;
        }
        default:
            console.log("Error: Invalid operation. Please enter one of +, -, *, /.");
    }
}