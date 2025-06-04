let user1 = {
    name : "Alice",
    surname : "Smith",
    age : 30,
    email : "alice123@gmail.com",
};

let user2 = {
    name : "Bob",
    surname : "Johnson",
    age : 25,
    email : "bobjohson@gmail.com",
}
console.log(user1);
console.log(user2);

console.log(user1.name);
console.log(user2.surname);


console.log(user2.phone); // -> undefined
user2.phone = "904-399-7557";
console.log(user2.phone); // -> 904-399-7557

console.log(user2.phone); // -> 904-399-7557
delete user2.phone;
console.log(user2.phone); // -> undefined