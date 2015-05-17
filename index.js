var app = require('http').createServer();
var io = require('socket.io')(app);
var Router = require('./routers/');

io.on('connection', function (socket) {
  new Router(io, socket);
});

app.listen(9000);