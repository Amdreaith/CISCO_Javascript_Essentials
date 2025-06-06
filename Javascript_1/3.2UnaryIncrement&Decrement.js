/*

 Unary increment and decrement operators
Among the arithmetic operators, we also
have at our disposal the unary increment ++ 
and decrement -- operators, in both prefix and postfix 
versions. They allow us to increase (increment) or decrease
 (decrement) the value of the operand by 1.

These operators in the postfix version (i.e. the operator
 is on the right side of the operand) performs the operation 
 by changing the value of the variable, but returns the value 
 before the change. The prefix version of the operator (i.e.
  the operator is placed before the operand) performs the 
  operation and returns the new value.

Probably the easiest way to understand it is to use an 
example from the editor.

*/ 

let n1 = 10;
let n2 = 10;
let n3 = 10;

console.log(n1);
console.log("postfix increment : n++ : " + n1++); // postfix increment
console.log(n1); // n1 is now 11
console.log("Prefix increment : " + ++n2); // prefix increment
console.log(n2); // n2 is now 11
console.log(n3);
console.log(n3--); // postfix decrement
console.log(n3); // n3 is now 9

let n4 = 30;
let n5 = 30;
console.log(n4);
console.log("postfix decrement : n4-- : " + n4--); // postfix decrement