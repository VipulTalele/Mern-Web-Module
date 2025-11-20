const fs = require("fs");

fs.rename("example.txt", "newname.txt", (err) => {
    if (err) throw err;
    console.log("File renamed!");
});
