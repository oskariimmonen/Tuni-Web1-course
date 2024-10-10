const http = require('http');
var fs = require('fs');
var url = require('url');

const server = http.createServer(function (req, res) {
	if (req.method == 'GET') {
		fs.readFile('get.html', function (err, data) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			//res.write(data);
			res.end(data);
		});
	} else if (req.method == 'POST') {

		fs.readFile('post.html', function (err, data) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			//res.write(data);
			res.end(data);
		});

	} 
	else {
		res.writeHead(405, { 'Allow': 'GET, POST' });
		res.end();

	}
});

server.listen(3000);
console.log('Node server running on port 3000');
