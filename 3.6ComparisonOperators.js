console.log(10 !== 4); //10 is not equal to 4 = true
console.log(10 !== 10); //10 is not equal to 10 = false
console.log(10 !== "10"); //10 is not equal to "10" = true
console.log("10" !== 10); //"10" is not equal to 10 = true
console.log("Alice" !== "Bob"); //"Alice" is not equal to "Bob" = true
console.log(0 !== false); //0 is not equal to false = false
console.log(undefined !== false); // -> true
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 != false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true

//--------------------------------------

// < , > , <= , >=
console.log("Comparison operators");
console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true
 
console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true
 
console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true

/*

You can compare strings that aren't numbers 
by looking at each character in the same position.
 The comparison is based on their order in the alphabet,
 where uppercase letters are valued less than lowercase 
 letters, and digits are valued even less.
*/
console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true
 
console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true
 
console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true
