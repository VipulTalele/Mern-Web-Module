var http = require("http");

function process_request(req, res) {
var body = 'Hello World\n';
var content_length = body.length ;
res.writeHead(200, {
'Content-Length': content_length,
'Content-Type': 'text/plain' });

res.end(body);

}

var srv = http.createServer(process_request);
srv.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');