const fs = require('fs');

fs.readFile('emp.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("File read error:", err);
        return;
    }

    let total = 0;

    const lines = data.split('\n');

    lines.forEach(line => {
        if (line.trim().length > 0) {
            const parts = line.split(':');
            const salary = parseInt(parts[3]); 
            total += salary;
        }
    });

    console.log("Total Salary:", total);
});
