const mongoose = require('mongoose');

const convertEmail = (email) => {
  return email.toLowerCase();
}

const Users = mongoose.Schema({
  name: { type: String, required: true },
  email: {type: String, uniquie: true, required: true, set: convertEmail,},
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Users', Users);