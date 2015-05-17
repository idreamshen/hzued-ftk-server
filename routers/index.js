var Player = require('../controllers/player.js');
var Lobby = require('../controllers/lobby.js');

module.exports = function (io, socket) {
  socket.on('login', function (msg) {
    var player = new Player(io, socket);
    player.login(msg);
  });
  //socket.on('logout', controller.playerLogout);
  socket.on('disconnect', function () {
    var player = new Player(io, socket);
    player.disconnect();
  });
  socket.on('create_lobby', function (msg) {
    var lobby = new Lobby(io, socket);
    lobby.create(msg);
  });
  //socket.on('join_lobby', controller.lobbyJoin);
  //socket.on('leave_lobby', controller.lobbyLeave);
  socket.on('list_lobby', function () {
    var lobby = new Lobby(io, socket);
    lobby.list();
  })
};