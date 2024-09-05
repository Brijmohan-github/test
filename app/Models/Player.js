// app/Models/Player.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  token: String,
  gameId: String,
  productFamily: String,
  sessionId: String,
  userId: String,
  currency: String,
  balance: String,
  username: String,
});

module.exports = mongoose.model('Player', PlayerSchema);
