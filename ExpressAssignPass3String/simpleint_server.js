const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "simpleInt.html"));
});

app.get("/calc", (req, res) => {
    const p = parseFloat(req.query.p);
    const n = parseFloat(req.query.n);
    const r = parseFloat(req.query.r);

    const si = (p * n * r) / 100;

    res.send(`
        <h2>Simple Interest Result</h2>
        <p>Principal: ${p}</p>
        <p>Years: ${n}</p>
        <p>Rate: ${r}</p>
        <h3>Simple Interest = ${si}</h3>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
