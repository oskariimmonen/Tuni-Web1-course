const http = require('http');
var fs = require('fs');

let app = http.createServer((req, res) => {
    
    res.writeHead(200, {'Content-Type': 'text/html'}); 
	fs.readFile('index.html', function(err, content){
        res.write(content);
        res.end();
    });
    
    
});
	

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');