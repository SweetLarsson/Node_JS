const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is my first node js program\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// TCP is on a area network layer that must deliver
// UCP 
// HTTP lives on TCP

