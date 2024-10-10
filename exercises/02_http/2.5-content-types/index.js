const http = require('http');
var fs = require('fs');


let app = http.createServer((req, res) => {

  
  var dat = req.headers['accept'];
    if (dat.includes('*/*')) {
        fs.readFile('data.txt', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        });
    }
    else if (dat.includes('text/plain')) {
        fs.readFile('data.txt', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        });
    }
    else if (dat.includes('text/xml')) {
        fs.readFile('data.xml', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.write(data);
            res.end();
        });
    }
    else if (dat.includes('application/json')) {
        fs.readFile('data.json', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(data);
            res.end();
        });
    }
    else {
        res.statusCode = 406;
        res.statusMessage = 'Content type not available';
        res.end();
    }


})
	

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');