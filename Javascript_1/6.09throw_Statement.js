console.log ("start");
try {
    throw 100;
} catch (error) {
    console.log(error);
}
console.log("end");