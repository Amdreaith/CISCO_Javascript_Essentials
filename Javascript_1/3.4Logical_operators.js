/* 

Logical operators work with Boolean type values (true or false). For now, we can assume that they work on 
operands of this type and return values of this type only. JavaScript provides us with three such operators:

a conjunction, i.e. logical AND (&& symbol)
an alternative, i.e. logical OR (symbol ||)
a negation, i.e. logical NOT (symbol !)
Their meaning is the same as in mathematical logi
and if you're not sure how they work, it's easiest to explain them based on logical sentences.

*/


// Logical operators in JavaScript

const a = falsse;
const b = true;
const c = true;
const d = false;
console.log(a && b && c || d); // false
console.log(a || b && c || d); // true
console.log(a || b || c && d); // true

