/** 
 * 4.07 Lab: Conditional Execution
 * 
 * Scenario
During the last modification of the program with the contact list, we allow the user to add a new contact with the
 data entered by the user while the program is executing. 
 Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:

showing the first contact (first)
showing the last contact (last)
adding a new contact (new)
When adding a new contact, check if the user has 
entered all the necessary data. If at least one of the 
three values is missing (name, phone, or email) don't add the contact.


 */

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

console.log("Welcome to the Contact List Application!");
let action = prompt("What would you like to do? (first, last, new): ").toLowerCase();
switch (action) {
    case "first" : {
        console.log("First contact:");
        if (contacts.length > 0) {
            console.log(`Name: ${contacts[0].name} , Phone: ${contacts[0].phone}, Email: ${contacts[0].email}`);
        } else {
            console.log("No contacts available.");
            
        }
        break;
        
    }
    case "last" : {
        console.log("Last contact:");
        if (contacts.length > 0) {
            console.log(`Name: ${contacts[contacts.length - 1].name}, Phone: ${contacts[contacts.length - 1].phone}, Email: ${contacts[contacts.length - 1].email}`);
        } else {
            console.log("No contacts available.");
        }
        break;
    }

    case "new" : {
        let name = prompt("Enter the contact's name: ");
        let phone = prompt("Enter the contact's phone: ");
        let email = prompt("Enter the contact's email: ");
        
        if (name && phone && email) {
            contacts.push({ name, phone, email });
            console.log("New contact added successfully!");
        } else {
            console.log("Error: All fields (name, phone, email) are required to add a new contact.");
        }
        break;
    }
}