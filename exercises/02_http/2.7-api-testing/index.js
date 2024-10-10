const http = require('http'); 
var fs = require('fs'); 
var url = require('url');

const server = http.createServer(function (req, res) {
     if (req.url == '/classical') {
		fs.readFile('homer.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			//res.write(data);
            res.end(data);
        });
    } else if (req.url == '/modern') {
		
		fs.readFile('bradbury.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			//res.write(data);
            res.end(data);
        });
	
	} else if (req.url == '/') {
		res.statusCode = '200';
		fs.readFile('index.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			//res.write(data);
            res.end(data);
        });
	
	}
	
		
	else {
		res.statusCode = 404;
        res.statusMessage = 'Requested content not found';
        res.end();
	}
});



server.listen(3000);
console.log('Node server running on port 3000'); 
module.exports = server;