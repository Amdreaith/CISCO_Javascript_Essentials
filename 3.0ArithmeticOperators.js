// Arithmetic Operators in JavaScript

/* 
it is a good habit to use parentheses to force the precedence 
and order of operations, not just arithmetic. The precedence 
of operations performed by the interpreter will not always 
be as intuitive as the 
precedence of arithmetic operations known from mathematics.
*/

console.log(2+2 *2);
console.log(2+(2 * 2));
console.log((2+2) * 2);
console.log(2+2/2);
console.log(2+2%2);

const x = 5;
const y = 3;
console.log("addition:", x + y);
console.log("subtraction:", x - y);
console.log("multiplication:", x * y);
console.log("division:", x / y);
console.log("modulus:", x % y);
console.log("exponentiation:", x ** y);
console.log("x after increment:", x);
console.log("y after decrement:", y);
