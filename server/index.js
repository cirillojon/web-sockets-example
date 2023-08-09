// create an http server using the http module of node.js
const http = require('http').createServer();

// create an instance of socket.io and pass the http object
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

// Listen for a new connection event from a client.
// When a client connects to the server, a 'connection' event is fired, and the provided callback function is executed.
io.on('connection', (socket) => {
    
    // Log to the server console that a new user has connected.
    console.log('a user connected');
    
    // Once the client is connected, we set up listeners for that particular client's socket.
    // In this case, we're listening for a 'message' event.
    socket.on('message', (message) => {
        
        // Log the received message to the server console.
        console.log(message);
        
        // Send the received message to all connected clients, but prepend it with an identifier based on the sender's socket ID.
        // The 'io.emit' function sends a message to all connected clients. 
        // The message being sent is formatted by taking the first two characters of the client's socket ID and appending the received message.
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    });
});

// Start the server listening on port 8080.
http.listen(8080, () => console.log('listening on http://localhost:8080'));