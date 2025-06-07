/*
The if else keyword is an optional part of the if statement, and it allows us to add a second code block that will be executed only when the initial condition is NOT met.
 Both blocks of code are separated using the else keyword.
*/ 

let isUserReady = confirm("Are you ready to play?");
if (isUserReady) {
    console.log("Great! Let's start the game.");
}
if (isUserReady === false) {
    console.log("Maybe next time!");
}

