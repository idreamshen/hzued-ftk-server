var ModelPlayer = require('../models/').Player;

function Player(io, socket) {
  this.io = io;
  this.socket = socket;
}

Player.prototype.login = function (msg) {
  var io = this.io;
  var socket = this.socket;

  var userid = msg.user_id;
  var socketid = socket.id;

  console.log(socketid, 'login');
  var query = {user_id: userid};
  ModelPlayer.findOne(query, {
    socket_id: socketid
  }, function (err, player) {
    if (err) {
      // TODO
      console.log(err);
    } else {
      if (player) {
        var oldSocketid = player.socket_id;
        var oldSocket = io.sockets.connected[oldSocketid];
        if (oldSocket) {
          oldSocket.emit('kickoff');
        }
        player.socket_id = socketid;
        player.save();
      } else {
        socket.emit('login');
        var player = new ModelPlayer({
          user_id: userid,
          socket_id: socketid,
          game_id: null
        });
        player.save();
      }
    }
  });

};

Player.prototype.logout = function (msg) {

};

Player.prototype.disconnect = function () {
  var io = this.io;
  var socket = this.socket;

  var socketid = socket.id;

  console.log(socketid, 'disconnect');

  var query = {socket_id: socketid};
  ModelPlayer.remove(query, function (err) {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = Player;