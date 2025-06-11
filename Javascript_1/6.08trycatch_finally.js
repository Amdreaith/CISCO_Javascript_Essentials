//try..catch finally can be nested, this is expected when we expect multiple behavior

let a = 10;
try {
    a = b;
} catch (error) {
    try {
        console.log(b);
    } catch {
        console.log("second catch");
    } 
}   finally {
    console.log("Finally block executed.");
}
