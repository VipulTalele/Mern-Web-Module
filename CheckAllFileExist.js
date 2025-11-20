const fs = require("fs");

if (fs.existsSync("newname.txt")) {
    console.log("File exists!");
} else {
    console.log("File does NOT exist!");
}
