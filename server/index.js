// create an http server using the http module of node.js
const http = require('http').createServer();

// create an instance of socket.io and pass the http object
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});