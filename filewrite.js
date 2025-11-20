const fs = require("fs");

fs.writeFile("example.txt", "This is my first file content", (err) => {
    if (err) throw err;
    console.log("File created and data written!");
});
