//it’s a method that accepts one optional parameter – a message that will be displayed. 

let remove = confirm("Remove the data?");
let message = remove ? "Data removed" : "Data not removed";
console.log(message);

// The confirm dialog box is a pop-up that asks the user to confirm an action. It returns true if the user clicks "OK" and false if they click "Cancel".
// The confirm dialog box will be visible until the user clicks either the "OK" or "Cancel" button. Code execution will be halted until the dialog box is closed.
// This would work in an HTML / browser environment.