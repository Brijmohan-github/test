// start/mongoose.js
const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://bhavesh-mojo:qun8c9v8epkuh0Lu@cluster-test.vpjht.mongodb.net/Cluster-test' 

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Successfully connected to MongoDB');
});

module.exports = mongoose;
