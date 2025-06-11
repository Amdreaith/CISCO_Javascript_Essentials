//a keyword "LET" is for the local variable 
// a keyword "VAR" is for the global variable

let temperatures;
let meanTemp;
function getMeanTemp() { //function declaration
    let sum = 0; //local variable
    //let sum; //if we declare it without initialization, it will be undefined
    for (let i = 0; i < temperatures.length; i ++) {
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;
}
temperatures = [20, 25, 30, 35, 40];
getMeanTemp(); //calling function
console.log(`Mean temperature: ${meanTemp}`); // -> Mean temperature: 30
console.log("");
console.log("the keywords let is the local variable,this can be seen inside the function only");