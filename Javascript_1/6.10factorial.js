function factorial(n) {
    let result = 1;
    for (; n> 1; n--) {
        result = result * n;
    }
    return result;
}
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(0)); 
console.log(factorial(1)); 
console.log(factorial(20)); 