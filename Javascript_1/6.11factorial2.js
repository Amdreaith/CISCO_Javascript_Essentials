// We will not accept arguments larger than 20.

function factorial(n) {
    if (n > 20 ) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n>1;n--) {
        result = result * n;
    }  
    return result;
}
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(100000));