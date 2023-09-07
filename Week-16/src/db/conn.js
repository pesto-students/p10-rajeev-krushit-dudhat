
const mongoose = require('mongoose');

let db;

const connect = async () => {
  db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  console.log('Connected to MongoDB');
}

const close = async () => {
  if (db) {
    await db.close();
    console.log('Disconnected from MongoDB');
  }
}

exports.connect = connect;
exports.close = close;
