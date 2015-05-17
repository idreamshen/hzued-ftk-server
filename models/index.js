var mongoose = require('mongoose');
var config = require('../config.json');

mongoose.connect(config.db, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

require('./lobby.js');
require('./player.js');
require('./user.js');

exports.User = mongoose.model('User');
exports.Player = mongoose.model('FTKPlayer');
exports.Lobby = mongoose.model('FTKLobby');