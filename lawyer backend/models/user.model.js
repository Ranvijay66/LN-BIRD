const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true  },
  email: { type: String, required: true, unique: true, lowercase: true},
  username: { type: String, required: true },
  password: { type: String, required: true },
  // confirmPassword is typically NOT stored in DB, so it's excluded here
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
