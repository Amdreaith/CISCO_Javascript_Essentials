//Conditional Operator
//it allows us to perform a conditional check and return one of two values based on the result of that check.

let price = 100;
let shippingCost;
if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}
console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0


//example using conditional operator:

//let price = 100;
//let shippingCost = price > 50 ? 0 : 5;
 
//console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0
