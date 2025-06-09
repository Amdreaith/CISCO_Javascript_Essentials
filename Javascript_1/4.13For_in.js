// for ... in

//a version of for loop but it enables us to walk through object fields

let user = {
    name : "Alice",
    surname : "Ace",
    age : 29,
    email : "alice29299@gmail.com"

};
for (let key in user) {
    // key is the name of the property
    console.log(key + ": " + user[key]); // user[key] is the value of the property
}