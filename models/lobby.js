var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LobbySchema = new Schema({
  leader_id: {type: Schema.ObjectId},
  name: {type: String},
  player_count: {type: Number, default: 1},
  create_at: {type: Date, default: Date.now},
  update_at: {type: Date, default: Date.now}
});

mongoose.model('FTKLobby', LobbySchema);