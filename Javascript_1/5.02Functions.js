let temperatures;
let sum;
let meanTemp;
function getMeanTemp() { //function declaration
    sum = 0;
    for (let i = 0; i < temperatures.length; i ++) {
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;
}
temperatures = [20, 25, 30, 35, 40];
getMeanTemp(); //calling function 
console.log(`Mean temperature: ${meanTemp}`); // -> Mean temperature: 30
