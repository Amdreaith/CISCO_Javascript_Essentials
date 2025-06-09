//do while loop

//This is very similar to while loop but the difference is that this condition is checked after the code block is executed, meaning that the code block will always be executed at least once.

/**
 * 
 * syntax:
 * do {
 *         code block
 *      while (condition);
 * }
 * 
 */
let condition = false;
while (condition) {
    console.log("A while loop will not execute this code block because the condition is false.");
} 
 do {
    console.log ("A do while loop will execute this code block at least once, even if the condition is false.");
 } while (condition);
// The do while loop is useful when you want to ensure that a block of code runs at least once, regardless of the condition.