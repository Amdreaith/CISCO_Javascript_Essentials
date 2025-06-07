//nested if else if else


/*ex:

let number = Number(prompt("Enter a number : ", 0));
if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 100) {
    alert("<100");
} else {
    alert(">100");
}
 */

const INSURANCE_COST = 2.99;

let shippingCost = 39.00;
let isOrderValid = true;

let userAge = 19;
let points = 500;
let cartValue = 299;
let ifFemale = true;
let hasPromoCode = true;
let hasParentsApproval = false;
let addInsurance = true;


//calculate the shipping cost based on user age, points, cart value, and promo code
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
    shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
    shippingCost = shippingCost - 5;
} else if (userAge < 21) {
    isOrderValid = false;
}


//take account of the insurance 
if (isOrderValid && addInsurance && !hasPromoCode) {
    shippingCost += INSURANCE_COST;
}

//print the final shipping cost
if (isOrderValid) {
    console.log(shippingCost);

} else {
    console.log("Order is not valid. Please check your details.");
}