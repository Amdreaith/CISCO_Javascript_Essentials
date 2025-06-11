//Recursion is a programming technique where a function calls itself to solve a problem

function factorialRecursive(n) {
    // Base case: if n is 0 or 1, the factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive step: n * factorial of (n-1)
    return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // -> 120