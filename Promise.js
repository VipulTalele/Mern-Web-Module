let promise = new Promise(function(resolve, reject) {
    let a = 10, b = 2;

    if (b !== 0) {
        let res = a / b;
        resolve("Output is: " + res);
    } else {
        reject("Cannot divide by zero!");
    }
});

promise
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function(err) {
        console.log("Error:", err);
    });