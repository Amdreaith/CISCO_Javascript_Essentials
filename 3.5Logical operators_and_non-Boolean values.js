// if the first operand of AND is false, it will be returned, and no other check will be performed.
// If the first operand is true, the second operand will be checked and returned.
// If the first operand of OR is true, it will be returned, and no other check will be performed.

let nr = 0;
let year = 1970;
let name = "John";
let empty = "";
console.log(!nr);
console.log(!year);
console.log(!name);
console.log(!empty);
console.log(!!nr);
console.log(!!year);
console.log(!!name);
console.log(!!empty);

console.log(true && 1990);
console.log(false && 1990);
console.log(2 && 5);
console.log(0 && 5);
console.log("Alice" && "Bob");
console.log("" & "Bob");
console.log(true || 1992);
console.log(false || 1992);
console.log(2 || 5);
console.log(0 || 5);
console.log("Alice" || "Bob");
console.log("" || "Bob");

