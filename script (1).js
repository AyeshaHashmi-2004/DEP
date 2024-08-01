document.addEventListener('DOMContentLoaded', () => {
    const socket = new WebSocket('ws://localhost:3000');
  
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessage');
    const messagesDiv = document.getElementById('messages');
  
    sendMessageButton.addEventListener('click', () => {
      const message = messageInput.value;
      if (message) {
        socket.send(message);
        messageInput.value = '';
      }
    });
  
    socket.addEventListener('message', (event) => {
      const message = event.data;
      const messageElement = document.createElement('p');
      messageElement.textContent = message;
      messagesDiv.appendChild(messageElement);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
  });