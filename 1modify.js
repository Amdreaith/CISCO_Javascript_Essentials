//Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).

const str1 = 42 + + "1"; // Using unary plus to convert "1" to a number
console.log(`${str1} [${typeof str1}]`); // Should output 43 [number]

const str2 = 89 + +  "12" + + 1 + + "13"; // Using unary plus to convert strings to numbers
console.log(`${str2} [${typeof str2}]`); // Should output 115 [number]