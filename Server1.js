const express = require("express");
const app = express();

let studs = [
    {sid:101, sname:"Savita", course:"DloT"},
    {sid:102, sname:"Kavita", course:"DAC"},
    {sid:103, sname:"Anita",  course:"DESD"},
    {sid:104, sname:"Sunita", course:"DloT"},
    {sid:105, sname:"Babita", course:"DMC"}
];

// RESTful URL: localhost:3000/students/Savita
app.get("/students/:name", (req, res) => {
    let name = req.params.name;

    // search in array (case insensitive)
    let student = studs.find(s => s.sname.toLowerCase() === name.toLowerCase());

    if (!student) {
        return res.send(`<h2>Student not found</h2>`);
    }

    res.send(`
        <h3>Student id : ${student.sid}</h3>
        <h3>Student name : ${student.sname}</h3>
        <h3>Student course : ${student.course}</h3>
        <br><a href="/students">Go Back to List</a>
    `);
});

// list of all students
app.get("/students", (req, res) => {
    let html = "<h2>Student List</h2><ul>";
    studs.forEach(s => {
        html += `<li><a href="/students/${s.sname}">${s.sname}</a></li>`;
    });
    html += "</ul>";
    res.send(html);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
