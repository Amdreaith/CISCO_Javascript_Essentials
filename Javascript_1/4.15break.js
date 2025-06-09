let gate = prompt("Enter the gate number (1-5):");
let win = false;

switch (gate) {
    case "1":
        win = confirm("You have chosen gate 1. Are you sure you want to proceed?");
        if (win) {
            console.log("You win a car!");
        } else {
            console.log("You have canceled your choice.");
        }
        break;
    case "2":
        win = confirm("You have chosen gate 2. Are you sure you want to proceed?");
        if (win) {
            console.log("You win a bike!");
        } else {
            console.log("You have canceled your choice.");
        }
        break;
    case "3":
        win = confirm("You have chosen gate 3. Are you sure you want to proceed?");
        if (win) {
            console.log("You win a trip!");
        } else {
            console.log("You have canceled your choice.");
        }
        break;
    case "4":
        win = confirm("You have chosen gate 4. Are you sure you want to proceed?");
        if (win) {
            console.log("You win a gift card!");
        } else {
            console.log("You have canceled your choice.");
        }
        break;
    case "5":
        win = confirm("You have chosen gate 5. Are you sure you want to proceed?");
        if (win) {
            console.log("You win nothing, try again!");
        } else {
            console.log("You have canceled your choice.");
        }
        break;
    default:
        console.log("Invalid gate number.");
}

if (win) {
    console.log("Congratulations! You are a winner!");
}
