const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

const messages = [];

io.on('connection', (socket) => {
    console.log('New client connected', socket.id);

    socket.emit('history', messages);

    socket.on('sendMessage', (text) => {
        if (typeof text !== 'string' || !text.trim()) return;

        const message = {
            id: `${Date.now()}-${socket.id}`,
            sender: socket.id,
            text: text.trim()
        };

        messages.push(message);
        if (messages.length > 50) {
            messages.shift();
        }

        io.emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
    });
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

httpServer.listen(3000, () => {
    console.log('Server is running on port 3000');
});
