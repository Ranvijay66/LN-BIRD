const {
  handleJoinSession,
  handleSendMessage,
  handleStartTimer
} = require('../controllers/socketController');

function chatSocket(io) {
  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on('join-session', (data) => handleJoinSession(socket, data));
    socket.on('send-message', (data) => handleSendMessage(io, data));
    socket.on('start-timer', (data) => handleStartTimer(io, data));

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
}

module.exports = chatSocket;
