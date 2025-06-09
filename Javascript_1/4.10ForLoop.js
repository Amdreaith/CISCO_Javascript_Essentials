//for loop

//this is divided into three parts:
// 1. initialization (declare and initialize a variable)
// 2. condition (when the loop should stop)
// 3. increment/decrement 

let values = [10,30,50,100]; //array
let sum = 0; //sum
for (let i = 0; i < 4; i++) { // for loop
// i is the index of the array, starting from 0 and going up to 3 (4 iterations)
    sum += values[i]; // add the value at index i to the sum
}
console.log("Sum of values: " + sum);
// The for loop is a powerful tool for iterating over arrays or performing a block of code a specific number of times.