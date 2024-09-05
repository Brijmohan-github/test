const mongoose = require('mongoose');

const AuthenticationSchema = new mongoose.Schema({
  token: String,
  productFamily: Number,
  gameId: String
});

module.exports = mongoose.model('Authentication', AuthenticationSchema);
