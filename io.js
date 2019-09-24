var io = require('socket.io')();

io.on('connection', socket => {
    socket.on('add-comment', data => {
        io.emit('add-comment', data);
    });
});

module.exports = io;