const Consultation = require('../models/Consultation');

exports.handleJoinSession = (socket, data) => {
  const { chatSessionId } = data;
  socket.join(chatSessionId);
  console.log(`Socket ${socket.id} joined session ${chatSessionId}`);
};

exports.handleSendMessage = (io, data) => {
  const { chatSessionId, sender, message } = data;
  io.to(chatSessionId).emit('receive-message', {
    sender,
    message,
    timestamp: new Date()
  });
};

exports.handleStartTimer = async (io, data) => {
  const { consultationId } = data;

  try {
    const consultation = await Consultation.findById(consultationId);
    if (!consultation) return;

    setTimeout(async () => {
      consultation.status = 'completed';
      await consultation.save();
      io.to(consultation.chatSessionId).emit('session-ended');
    }, 5 * 60 * 1000); // 5 minutes
  } catch (err) {
    console.error('Timer error:', err);
  }
};
