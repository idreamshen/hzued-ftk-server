var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  user_id: {type: Schema.ObjectId},
  socket_id: {type: String},
  lobby_id: {type: Schema.ObjectId},
  create_at: {type: Date, default: Date.now},
  update_at: {type: Date, default: Date.now}
});

mongoose.model('FTKPlayer', PlayerSchema);