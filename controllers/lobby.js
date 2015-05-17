var ModelLobby = require('../models').Lobby;


function Lobby(io, socket) {
  this.io = io;
  this.socket = socket;
}

Lobby.prototype.create = function (msg) {
  var io = this.io;
  var socket = this.socket;

  var leaderid = msg.user_id;
  var lobbyName = msg.lobby_name;

  var lobby = new ModelLobby({
    leader_id: leaderid,
    name: lobbyName
  });
  lobby.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      io.emit('create_lobby', lobby);
    }
  })
};

Lobby.prototype.leave = function () {

};

Lobby.prototype.start = function () {

};

Lobby.prototype.join = function () {
  
};

Lobby.prototype.list = function () {
  var io = this.io;
  var socket = this.socket;
  ModelLobby.find({}, function (err, lobbies) {
    if (err) {
      console.log(err);
    } else {
      socket.emit('list_lobby', lobbies);
    }
  })
};

module.exports = Lobby;