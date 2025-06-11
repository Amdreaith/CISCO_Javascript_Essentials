try {
    let a = b;
} catch (error) {
    console.log ("catch block executed");
    console.log("Error message:", error.message);
}
console.log("This line will still execute after the catch block.");