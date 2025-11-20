new Promise((resolve, reject) => {
    resolve(5);
})
.then(value => {
    console.log("Step 1:", value);
    return value + 5;
})
.then(value => {
    console.log("Step 2:", value);
    return value * 2;
})
.then(value => {
    console.log("Step 3:", value);
    return value - 3;
})
.then(final => {
    console.log("Final Output:", final);
})
.catch(err => {
    console.log("Error:", err);
});
