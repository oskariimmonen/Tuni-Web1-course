const http = require('http');
var fs = require('fs');

let app = http.createServer((req, res) => {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write(JSON.stringify(req.headers));
	res.end();
	

});
	

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');