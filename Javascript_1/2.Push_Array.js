let names = ["Susan", "Emma", "Mia", "Sofia"];
console.log(names.length);

names.push("Amelia");
console.log(names.length); 
console.log(names); // -> ["Susan", "Emma", "Mia", "Sofia", "Amelia"]

/* 
The push method places the element given as
 its argument at the end of the array. The length 
 of the array is increased by 1, and the new element is inserted on 
the right (it has the largest index of all elements).

*/