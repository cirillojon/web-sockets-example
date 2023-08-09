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
    // This assumes there's an <ul> element in your HTML where messages will be appended.
    const ulElement = document.querySelector('ul');

    // Append the new list item to the unordered list.
    ulElement.appendChild(el);
});
