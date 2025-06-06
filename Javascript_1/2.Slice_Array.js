//slice method allows you to create a new array from selected elements of the original array

let names = ["Kimchi", "Ramyeon", "Ricecake", "Ramen", "Sushi"];

let n1 = names.slice(1, 3); // Extracts elements from index 1 to index 3 (not including index 3)
console.log(n1); // -> ["Ramyeon", "Ricecake"]

let n2 = names.slice(2);
console.log(n2);

let n3 = names.slice(-2);
console.log(n3); // -> ["Ramen", "Sushi"]

let n4 = names.slice(0, -2);
console.log(n4); // -> ["Kimchi", "Ramyeon", "Ricecake"]

let n5 = names.slice(1, -1);
console.log(n5); // -> ["Ricecake", "Ramen", "Sushi"]

let n6 = names.slice(-1);
console.log(n6); // -> ["Ramyeon", "Ricecake", "Ramen", "Sushi"]

console.log(" ");
console.log("TOTAL NAMES : " + names); // Original array remains unchanged: ["Kimchi", "Ramyeon", "Ricecake", "Ramen", "Sushi"]