let greetings = "Hi";
console.log(greetings + " " + "Alice");
let sentence = "Happy Birthday ";
let newSentence = sentence + 2025;
console.log(newSentence);
console.log(typeof newSentence); // expected "string"


/*
Compound Assignment Operators

You can probably guess that this operator can also be used in conjunction with the replacement operator. Its operation
 is so intuitive that we will stop with a simple example:
*/
console.log("Compound Assignemt Operators");
sentence += "Year ";
sentence += 2025;
console.log(sentence); // expected "Happy Birthday Year1012"