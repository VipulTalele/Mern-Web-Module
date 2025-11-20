const fs = require("fs");

fs.readFile("customer.json", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    let customers = JSON.parse(data);

    customers.forEach(c => {
        console.log(`Name: ${c.custname}`);
        console.log(`Phone: ${c.phno}`);
        console.log(`Address: ${c.address}`);
        console.log("-----------------------------");
    });
});
