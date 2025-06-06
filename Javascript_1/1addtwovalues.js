//Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.

let a = false + true;
let b = Boolean(1 + 2);
let c = Number(1+2);
let d = "Hi" + " there";
let f = 1 + 45;
let g = undefined + undefined;

console.log(`${a} [${typeof a}]`);
console.log(`${b} [${typeof b}]`);
console.log(`${c} [${typeof c}]`);  
console.log(`${d} [${typeof d}]`);
console.log(`${f} [${typeof f}]`);
console.log(`${g} [${typeof g}]`);