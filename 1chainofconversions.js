let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

let a = Boolean ( BigInt(Number("2424")) + 1n);
console.log(`${a} [${typeof a}]`);

let c = Number ( Boolean( BigInt(Number("1234")) + 1n));
console.log(`${c} [${typeof c}]`);

