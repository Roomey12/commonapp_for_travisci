'use strict';
<<<<<<< HEAD
const fs = require('fs');
const http = require('http');
const hostname = '0.0.0.0';
var port = process.env.PORT || 8000;
const file = fs.readFileSync('index.html', 'utf8');
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(file);
        res.end();
    }
=======

const http = require('http');
const hostname = '127.0.0.1';
const port = server.listen(process.env.PORT || 3000);
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hi there!\n');
>>>>>>> 6f3f33ac951f739a126146a31f08e379fd4a5fd5
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});