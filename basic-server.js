
const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Hello');

});

// Start server on port 3001
server.listen(3001, () => {
    console.log('Basic HTTP server running at http://localhost:3001');
});
