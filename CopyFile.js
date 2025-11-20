const fs = require("fs");

fs.copyFile("newname.txt", "copy.txt", (err) => {
    if (err) throw err;
    console.log("File copied!");
});
