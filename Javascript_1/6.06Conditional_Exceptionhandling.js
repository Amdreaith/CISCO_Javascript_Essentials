let a = -2;
try {
    a = b;
 } catch (error) {
    if (error instanceof ReferenceError) {
        console.log("ReferenceError caught: Variable 'b' is not defined.");
        a = -2;
        } else {
            console.log("Other error - " + error);
        }
 }
 console.log(a);