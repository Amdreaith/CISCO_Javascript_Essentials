let names = ["Olivia", "Emma", "Mia", "Sofia"];
console.log(names.length);

names[5] = "Amelia";
console.log(names.length); // -> 6

console.log(names);
["Sam", undefined, "Liam", "Olivia", "Emma", "Mia", "Sofia", "Amelia"];
console.log(names[0]); // -> Sam
console.log(names[3]); 
console.log(names[5]); // -> Amelia
console.log(names[6]); // -> undefined