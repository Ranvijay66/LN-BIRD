const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
require('dotenv').config();
require('./config'); // DB config

// Routes
const userRoutes = require('./routes/user.route');
const lawyerRoutes = require('./routes/lawyer.route');
const consultationRoutes = require('./routes/consultationRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// WebSocket Logic
const chatSocket = require('./sockets/chat');

const app = express();
const server = http.createServer(app); // Use http server for socket.io
const io = socketIO(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Attach `io` to app so controllers can use it
app.set('io', io);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.send('User Management System is running'));
app.use('/api/user', userRoutes);
app.use('/api/lawyers', lawyerRoutes);
app.use('/api/user/consultation', consultationRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/user/payment', paymentRoutes);

// WebSocket event registration
chatSocket(io);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
