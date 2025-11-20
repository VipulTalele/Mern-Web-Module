const fs = require("fs");

fs.rmdir("myfolder", (err) => {
    if (err) throw err;
    console.log("Folder deleted!");
});
