// app/Models/Player.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  token: String,
  gameId: String,
  productFamily: Enum,
  sessionId: String,
  userId: String,
  currency: String,
  balance: Decimal,
  username: String,
});

module.exports = mongoose.model('Player', PlayerSchema);
