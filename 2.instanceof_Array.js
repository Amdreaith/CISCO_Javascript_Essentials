let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";

console.log(typeof days); // -> object
console.log(typeof day); // -> string
console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false

//The instanceof operator is a two-argument operator, which requires the tested variable (or literal) and object class to be specified. In our case, the class isArray. The operator returns true
//  or false, depending on the test result.