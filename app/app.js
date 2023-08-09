// Connect to socket.io server
const socket = io('ws://localhost:8080');

// Listen for the 'message' event on the socket.
// This event is triggered when a message is received from the server.
socket.on('message', text => {

    // Create a new list item (li) element.
    const el = document.createElement('li');

    // Set the inner content (HTML) of the list item to the text received from the server.
    el.innerHTML = text;

    // Find the first unordered list (ul) element in the document.
    const ulElement = document.querySelector('ul');

    // Append the new list item to the unordered list.
    ulElement.appendChild(el);
});

// Give user ability to send message
// Listen to click event on button
// Select the first <button> element in the document.
document.querySelector('button').onclick = () => {

    // Select the first <input> element in the document and retrieve its value.
    const text = document.querySelector('input').value;
    
    // Emit a 'message' event from the client to the server with the text from the input field.
    // This is how the client sends a message to the server using socket.io.
    socket.emit('message', text);
}
