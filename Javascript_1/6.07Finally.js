//finally statement is used to execute code after try and catch blocks, regardless of whether an error was thrown or not.

let a = 10;
try {
    a = b;
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log ("Finally block executed.");
}
console.log("Value of a:", a);

//THE IMPORTANCE?? "finally" block will be executed even when an error is thrown from the catch block.