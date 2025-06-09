const LawyerModel = require('../models/lawyer.model');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const path = require('path');
const jwt = require('jsonwebtoken');


// ---------------------- Basic Lawyer CRUD ----------------------



const addLawyer = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      barRegistrationNumber,
      practiceAreas,         // Should be array or JSON string
      yearsOfExperience,
      workingHours,          // Optional, should be an object like { monday: { start, end }, ... }
    } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !password || !barRegistrationNumber) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if email already exists
    const existing = await LawyerModel.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Lawyer with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Parse optional JSON fields if needed
    const parsedPracticeAreas = typeof practiceAreas === 'string'
      ? JSON.parse(practiceAreas)
      : practiceAreas;

    const parsedWorkingHours = typeof workingHours === 'string'
      ? JSON.parse(workingHours)
      : workingHours;

    // Create and save new lawyer
    const newLawyer = new LawyerModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      barRegistrationNumber,
      practiceAreas: parsedPracticeAreas || [],
      yearsOfExperience,
      workingHours: parsedWorkingHours || {},
      // documents and onlineStatus are optional or set via separate routes
    });

    const savedLawyer = await newLawyer.save();

    res.status(201).json({ message: 'Lawyer added successfully', lawyer: savedLawyer });
  } catch (error) {
    console.error('Error adding lawyer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};






const loginLawyer = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for required fields
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find lawyer by email
    const lawyer = await LawyerModel.findOne({ email });
    if (!lawyer) {
      return res.status(404).json({ error: 'No account found with this email' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, lawyer.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create JWT Token
    const token = jwt.sign(
      { id: lawyer._id, role: 'lawyer' },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      lawyer: {
        id: lawyer._id,
        email: lawyer.email,
        name: `${lawyer.firstName} ${lawyer.lastName}`,
        status: lawyer.status
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};




const searchLawyers = async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const results = await LawyerModel.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { specialization: { $regex: query, $options: 'i' } }
      ]
    });

    res.status(200).json(results);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// ---------------------- Registration & Email ----------------------

const registerLawyer = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      barRegistrationNumber,
      practiceAreas,
      yearsOfExperience
    } = req.body;

    if (!firstName || !lastName || !email || !password || !barRegistrationNumber) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const existingLawyer = await LawyerModel.findOne({ email });
    if (existingLawyer) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const documents = [];
    if (req.files && Array.isArray(req.files)) {
      req.files.forEach(file => {
        documents.push(path.join('uploads/lawyers', file.filename));
      });
    }

    const lawyer = await LawyerModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      barRegistrationNumber,
      practiceAreas: practiceAreas ? JSON.parse(practiceAreas) : [],
      yearsOfExperience,
      documents,
      status: 'pending'
    });

    sendConfirmationEmail(lawyer.email, lawyer.firstName);

    res.status(201).json({
      message: 'Registration successful. Your application is pending verification.',
      lawyerId: lawyer._id
    });
  } catch (error) {
    console.error('Lawyer registration error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

function sendConfirmationEmail(toEmail, firstName) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: toEmail,
    subject: 'Registration Confirmation - Lawyer Portal',
    html: `<p>Hi ${firstName},</p><p>Thank you for registering as a lawyer. Your application is currently pending verification by our team.</p>`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Email error:', err);
    } else {
      console.log('Confirmation email sent:', info.response);
    }
  });
}

// ---------------------- Profile & Availability ----------------------

const getProfile = async (req, res) => {
  try {
    const lawyerId = req.lawyerId;
    const lawyer = await LawyerModel.findById(lawyerId).select('-password -documents');
    if (!lawyer) return res.status(404).json({ message: 'Lawyer not found' });
    res.json(lawyer);
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateProfile = async (req, res) => {
  try {
    const lawyerId = req.lawyerId;
    const updates = req.body;
    const lawyer = await LawyerModel.findByIdAndUpdate(lawyerId, updates, {
      new: true,
      runValidators: true
    }).select('-password -documents');

    if (!lawyer) return res.status(404).json({ message: 'Lawyer not found' });
    res.json({ message: 'Profile updated', lawyer });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateAvailability = async (req, res) => {
  try {
    const lawyerId = req.lawyerId;
    const { workingHours } = req.body;
    if (!workingHours) return res.status(400).json({ message: 'Working hours required' });

    const lawyer = await LawyerModel.findByIdAndUpdate(
      lawyerId,
      { workingHours },
      { new: true, runValidators: true }
    );

    if (!lawyer) return res.status(404).json({ message: 'Lawyer not found' });

    res.json({ message: 'Working hours updated', workingHours: lawyer.workingHours });
  } catch (error) {
    console.error('Update availability error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const toggleOnlineStatus = async (req, res) => {
  try {
    const lawyerId = req.lawyerId;
    const { onlineStatus } = req.body;
    if (typeof onlineStatus !== 'boolean') {
      return res.status(400).json({ message: 'Invalid online status' });
    }

    const lawyer = await LawyerModel.findByIdAndUpdate(
      lawyerId,
      { onlineStatus },
      { new: true }
    );

    if (!lawyer) return res.status(404).json({ message: 'Lawyer not found' });

    // Optional: Emit update via socket.io here
    // req.app.get('io').emit('lawyerStatusChanged', { lawyerId, onlineStatus });

    res.json({ message: 'Online status updated', onlineStatus });
  } catch (error) {
    console.error('Toggle online status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addLawyer,
  loginLawyer,
  searchLawyers,
  registerLawyer,
  getProfile,
  updateProfile,
  updateAvailability,
  toggleOnlineStatus
};
