//shift -- will remove the first element of an array and return it
let names = ["Unasusan", "SunodCruz", " ThirdSelia"," FourthKlieso"];
console.log(names.length);

let name = names.shift();
console.log(names.length);
console.log(name); // -> Unasusan

console.log("Updated version :" + names); // -> ["SunodCruz", " ThirdSelia", " FourthKlieso"]