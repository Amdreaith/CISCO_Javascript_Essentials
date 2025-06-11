//parameter validation is a common practice to ensure that the function receives the expected type and value of arguments. This can help prevent errors and unexpected behavior in your code.

function getMeanTemp(temperatures) {
    //core of the validation:
     if (!(temperatures instanceof Array)) { //checks if temperatures is !(NOT) an array
         return NaN; //if temperatures is not an array, return NaN
     }
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     return sum / temperatures.length;
}
console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20
