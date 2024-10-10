const http = require('http');
var fs = require('fs');

let app = http.createServer((request, response) => {
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.end(body);
  });
})
	

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');