const http = require('http');
const port = 3000;

http.createServer((req, res) => {
    // Remove the line 'res.end();' below when you start your own development
    res.end();
    const headers = {
        /** TODO: add the required CORS headers */
    };

    // TODO: handle HEAD HTTP method, 
    // remember to add CORS headers to response

    // TODO: handle GET and POST HTTP methods, 
    // remember to add CORS headers to response

    // TODO: handle HTTP methods that are not allowed, 
    // remember to add CORS headers to response

}).listen(port);