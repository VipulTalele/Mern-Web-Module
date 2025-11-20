const express = require("express");
const students = require("./data/students");
const app = express();

app.use(express.static("public"));

// API: All students
app.get("/students", (req, res) => {
  res.json(students);
});

// API: Search students
app.get("/search", (req, res) => {
  const name = req.query.name?.toLowerCase();
  const result = students.filter(s => s.name.toLowerCase().includes(name));
  res.json(result);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
