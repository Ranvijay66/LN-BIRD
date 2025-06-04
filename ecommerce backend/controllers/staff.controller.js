const StaffModel = require('../models/staff.model');
const bcrypt = require('bcrypt');

// ✅ Add new staff/admin
const addStaff = async (req, res) => {
  try {
    const { name, email, password, phone, joiningDate, role } = req.body;
    const image = req.file ? req.file.filename : null;

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStaff = new StaffModel({
      name,
      email,
      password: hashedPassword,
      phone,
      joiningDate: new Date(joiningDate), // Convert string to Date
      role,
      image,
    });

    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (error) {
    console.error('Error adding staff:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Get all staff
const getAllStaff = async (req, res) => {
  try {
    const staffList = await StaffModel.find();
    res.status(200).json(staffList);
  } catch (error) {
    console.error('Error fetching staff:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Get single staff by ID
const getStaffById = async (req, res) => {
  try {
    const staff = await StaffModel.findById(req.params._id);
    if (!staff) return res.status(404).json({ error: 'Staff not found' });
    res.status(200).json(staff);
  } catch (error) {
    console.error('Error fetching staff by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Update staff
const updateStaff = async (req, res) => {
  try {
    const { name, email, phone, joiningDate, role, status } = req.body;
    const image = req.file ? req.file.filename : undefined;

    const updatedStaff = await StaffModel.findByIdAndUpdate(
      req.params._id,
      {
        name,
        email,
        phone,
        joiningDate: joiningDate ? new Date(joiningDate) : undefined,
        role,
        status,
        ...(image && { image })
      },
      { new: true }
    );

    if (!updatedStaff) return res.status(404).json({ error: 'Staff not found' });
    res.status(200).json(updatedStaff);
  } catch (error) {
    console.error('Error updating staff:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Delete staff
const deleteStaff = async (req, res) => {
  try {
    const deleted = await StaffModel.findByIdAndDelete(req.params._id);
    if (!deleted) return res.status(404).json({ error: 'Staff not found' });
    res.status(200).json({ message: 'Staff deleted successfully' });
  } catch (error) {
    console.error('Error deleting staff:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff
};
