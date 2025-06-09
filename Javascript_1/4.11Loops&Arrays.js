/*let names = [];
let isOver = false;
while (!isOver) { //this means !isoVer is true  
    let name = prompt("Enter another name or press cancel to finish: ");
    if (name != null) {
        names.push(name);
    } else {
        isOver =true;
    }
}
for (let i=0;i < names.length;i++) {
    console.log(names[i]);
}
*/

//another example :

let values = [10,20,30,40,50,60,70,80,90,100]; //array
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}
for (let i=values.length - 1; i>0; i--) {
    console.log(values[i]);
} 
for (let i=0;i<values.length; i +=2) {
    console.log(values[i]);
}