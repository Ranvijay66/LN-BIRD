const LawyerModel = require('../models/lawyer.model');
const cloudinary = require('cloudinary').v2;
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Configure Cloudinary
require('dotenv').config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// ---------------------- Basic Lawyer CRUD ----------------------
const addLawyer = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      phone,
      barRegistrationNumber,
      practiceAreas,
      yearsOfExperience,
      workingHours,
    } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !password || !barRegistrationNumber || !username) {
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
      : practiceAreas || [];

    const parsedWorkingHours = typeof workingHours === 'string'
      ? JSON.parse(workingHours)
      : workingHours || {};

    // Create and save new lawyer
    const newLawyer = new LawyerModel({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      phone,
      barRegistrationNumber,
      practiceAreas: parsedPracticeAreas,
      yearsOfExperience: yearsOfExperience || 0,
      workingHours: parsedWorkingHours,
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
    
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find lawyer by email
    const lawyer = await LawyerModel.findOne({ email });
    
    // Check if lawyer exists
    if (!lawyer) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Check if lawyer has a password
    if (!lawyer.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Compare passwords
    const isMatch = await bcrypt.compare(password, lawyer.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { id: lawyer._id, email: lawyer.email, role: 'lawyer' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    // Return token and lawyer info (without password)
    const { password: _, ...lawyerWithoutPassword } = lawyer.toObject();
    
    res.status(200).json({
      message: 'Login successful',
      token,
      lawyer: lawyerWithoutPassword
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
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
        { firstName: { $regex: query, $options: 'i' } },
        { lastName: { $regex: query, $options: 'i' } },
        { practiceAreas: { $regex: query, $options: 'i' } }
      ]
    }).select('-password');

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
      username,
      email,
      password,
      phone,
      barRegistrationNumber,
      practiceAreas,
      yearsOfExperience
    } = req.body;

    if (!firstName || !lastName || !email || !password || !barRegistrationNumber || !username) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const existingLawyer = await LawyerModel.findOne({ email });
    if (existingLawyer) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const documents = [];

    // Upload documents to Cloudinary if files exist
    if (req.files && Array.isArray(req.files)) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path);
        documents.push(result.secure_url);
        
        // Delete local file after upload
        fs.unlink(file.path, err => {
          if (err) console.error(`Failed to delete file: ${file.path}`, err);
        });
      }
    }

    const lawyer = await LawyerModel.create({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      phone,
      barRegistrationNumber,
      practiceAreas: practiceAreas ? JSON.parse(practiceAreas) : [],
      yearsOfExperience: yearsOfExperience || 0,
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
    const lawyerId = req.user.id; // Assuming JWT middleware sets this
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
    const lawyerId = req.user.id;
    const updates = req.body;
    
    // Prevent updating sensitive fields
    if (updates.password || updates.email || updates.barRegistrationNumber) {
      return res.status(403).json({ message: 'Cannot update this field' });
    }

    const lawyer = await LawyerModel.findByIdAndUpdate(
      lawyerId, 
      updates, 
      { new: true, runValidators: true }
    ).select('-password -documents');

    if (!lawyer) return res.status(404).json({ message: 'Lawyer not found' });
    res.json({ message: 'Profile updated', lawyer });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateAvailability = async (req, res) => {
  try {
    const lawyerId = req.user.id;
    const { workingHours } = req.body;
    
    if (!workingHours) {
      return res.status(400).json({ message: 'Working hours required' });
    }

    const parsedWorkingHours = typeof workingHours === 'string'
      ? JSON.parse(workingHours)
      : workingHours;

    const lawyer = await LawyerModel.findByIdAndUpdate(
      lawyerId,
      { workingHours: parsedWorkingHours },
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
    const lawyerId = req.user.id;
    const { onlineStatus } = req.body;
    
    if (typeof onlineStatus !== 'boolean') {
      return res.status(400).json({ message: 'Invalid online status' });
    }

    const lawyer = await LawyerModel.findByIdAndUpdate(
      lawyerId,
      { onlineStatus },
      { new: true }
    ).select('-password');

    if (!lawyer) return res.status(404).json({ message: 'Lawyer not found' });
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