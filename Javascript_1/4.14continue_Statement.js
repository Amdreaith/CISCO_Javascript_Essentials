for (let i = 0; i < 20; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i); // prints 0, 1, 2, 4, 5, ..., 19 (skips 3)
}