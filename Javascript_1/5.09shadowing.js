//shadowing is when a variable in a local scope has the same name as a variable in an outer scope
function outer() {
    let name = "outer"; // outer scope variable
    let str = inner();
    return str;
}