/**
 * 
 * function add(first, second) {
return first + second;
}

 */// This code defines a function `add` that takes two parameters and returns their sum.
// The function can be called with two arguments to get the result.

function getElement(arr, index) {
    if (!Array.isArray(arr)) throw new TypeError("First argument must be an array");
    if (typeof index !== "number" || index < 0 || index >= arr.length) {
        throw new RangeError("Index out of bounds");
    }
    return arr[index];
}

let names = ["Alice", "Bob", "Charlie"];
let name = getElement(names, 2);
console.log(name); // Output: Charlie

