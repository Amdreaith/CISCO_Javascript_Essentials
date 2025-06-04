let testObj = {
    a: 1,
    b: "Hello",
    c: true,
    d: undefined,
    e: null,
    f: Symbol("test"),
    g: BigInt(12345678901234567890n)
}
console.log(testObj);
console.log(`a: ${testObj.a} [${typeof testObj.a}]`);
console.log(`b: ${testObj.b} [${typeof testObj.b}]`);
console.log(`c: ${testObj.c} [${typeof testObj.c}]`);
console.log(`d: ${testObj.d} [${typeof testObj.d}]`);
console.log(`e: ${testObj.e} [${typeof testObj.e}]`);
console.log(`f: ${testObj.f.toString()} [${typeof testObj.f}]`);
console.log(`g: ${testObj.g} [${typeof testObj.g}]`);