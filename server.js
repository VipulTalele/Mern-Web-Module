const http = require('http');
const greet = require('./Greet');

const server = http.createServer((req, res) => {
    const message = greet.getGreeting();
    
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(message);
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
