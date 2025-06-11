/**
 * Exercise 1: Arrays in JavaScript have a sort method available which,
 *  as you might guess, allows you to sort its elements. This method 
 * takes as an argument a function that will compare two elements of the 
 * array. The function should return zero if we consider the arguments to
 *  be the same, a value less than zero if we consider the first one to
 *  be smaller than the second, 
 * and a value larger than zero otherwise. Take a look at the example:
 * 
 * let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
     let retVal = 0;
     if (a < b) {
         retVal = -1;
     } else if(a > b) {
         retVal = 1;
     }
     return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

 */

let number = prompt ("Enter a number to sort:");
let (number > 90 && number < 100) {
    console,log("Bingo!");
}else {
    console.log("Try again!");
}