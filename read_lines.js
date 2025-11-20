const fs = require('fs');

fs.readFile('info.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    const lines = data.split('\n');

    lines.forEach((line, index) => {
        console.log(`${index + 1}.  ${line}`);
    });
});
