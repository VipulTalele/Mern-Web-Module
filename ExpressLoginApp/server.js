const express = require("express");
const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Hardcoded users array
let users = [
    { uname: "shrilata", pass: "secret" },
    { uname: "admin", pass: "admin123" },
    { uname: "user1", pass: "pass1" }
];

// Serve login.html as homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.post("/login", (req, res) => {
    let uname = req.body.uname;
    let pass = req.body.pass;

    let found = users.find(u => u.uname === uname && u.pass === pass);

    if (found) {
        res.sendFile(__dirname + "/success.html");
    } else {
        res.sendFile(__dirname + "/failure.html");
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
