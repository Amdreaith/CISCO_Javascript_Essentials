//for ... off is a loop which is dedicated for use of "Arrays and Objects".

let values = [10, 30, 50, 100]; // array
let sum = 0; // sum
for (let number of values) { // let number is the value of each element in the array
    // for ... of loop iterates over the values in the array
    sum += number; // add the value to the sum
}
console.log("Sum of values: " + sum);

/**
 * syntax:
 * 
 * for (variable of array) {
    block of code
}

 */