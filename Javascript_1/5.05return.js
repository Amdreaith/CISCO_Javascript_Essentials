//return statement
// The return statement is used to exit a function and optionally return a value.
// If no value is specified, it returns undefined.

function showNotif() {
    console.log("Notification: The operation was successful.");
    return;
    console.log("This line will not be executed because of the return statement."); 

}
showNotif();
// The above code defines a function `showNotif` that logs a notification message to the console and then immediately returns, preventing any subsequent code in the function from executing. When `showNotif` is called, it will only log the notification message and not the line after the return statement.