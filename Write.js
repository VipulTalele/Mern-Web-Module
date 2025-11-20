const fs = require('fs');

let employees = [
    { id: 1001, name: "Harry", dept: "Sales", salary: 23000 },
    { id: 1002, name: "Sarita", dept: "Accounts", salary: 20000 },
    { id: 1003, name: "Monika", dept: "TechSupport", salary: 35000 },
    { id: 1004, name: "Rohit", dept: "HR", salary: 25000 }
];

let dataToWrite = "";

employees.forEach(emp => {
    dataToWrite += `${emp.id}:${emp.name}:${emp.dept}:${emp.salary}\n`;
});

fs.writeFile("employee_output.txt", dataToWrite, (err) => {
    if (err) console.log("Error writing file:", err);
    else console.log("Employee data saved successfully.");
});
