//install all node packages and install express

const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/display", (req, res) => {
    const { s1, s2, s3 } = req.query;

    res.send(`
        <h2>The parameters are</h2>
        <ul>
            <li>${s1}</li>
            <li>${s2}</li>
            <li>${s3}</li>
        </ul>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
