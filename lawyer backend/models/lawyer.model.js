const mongoose = require('mongoose');

const lawyerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  practiceAreas: [{ type: String }],
  yearsOfExperience: Number,
  email: { type: String, required: true, unique: true },
  phone: String,
  password: { type: String, required: true },
  barRegistrationNumber: String,
  documents: [{ type: String }],  // For uploaded verification docs
  
  workingHours: {
    type: Map,
    of: {
      start: String,
      end: String
    },
    default: {}
  },

  onlineStatus: {
    type: Boolean,
    default: false
  },

  status: {  // Verification status
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending'
  },

  isVerified: {  // convenience boolean, keep in sync with status === 'verified'
    type: Boolean,
    default: false
  },

  verificationHistory: [  // admin actions log
    {
      adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
      action: { type: String, enum: ['approved', 'rejected'] },
      reason: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model('Lawyer', lawyerSchema);
