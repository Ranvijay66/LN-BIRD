const mongoose = require('mongoose');

const lawyerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  location: String,
  experience: Number,
  email: { type: String, required: true, unique: true },
  phone: String
}, { timestamps: true });

const LawyerModel = mongoose.model('Lawyer', lawyerSchema);
module.exports = LawyerModel;
