//if statement is simplest form to control the flow of execution in a program
// Example 1: Basic if statement

let userAge = 23;
let ifFemale = true;
let points = 700;
let cartValue = 299;
let shippingCost = 10.0;
if (userAge >  21) {
    if (cartValue >= 300 || points >= 500)
        shippingCost = 0;
}
console.log(shippingCost);

/* 
or if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 0;
}


Here the condition will be evaluated to true when:

userAge is greater than 21 AND;
cartValue is greater than or equal to 300 OR points is greater than or equal to 500.
*/