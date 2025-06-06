const LawyerModel = require('../models/lawyer.model');

// Add a new lawyer
const addLawyer = async (req, res) => {
  try {
    const { name, specialization, location, experience, email, phone } = req.body;

    if (!name || !specialization || !email) {
      return res.status(400).send({ message: 'Name, specialization, and email are required' });
    }

    // Check if email already exists
    const existing = await LawyerModel.findOne({ email });
    if (existing) {
      return res.status(409).send({ message: 'Lawyer with this email already exists' });
    }

    const newLawyer = new LawyerModel({ name, specialization, location, experience, email, phone });
    const savedLawyer = await newLawyer.save();

    res.status(201).send({ message: 'Lawyer added successfully', lawyer: savedLawyer });
  } catch (error) {
    console.error('Error adding lawyer:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
};

// Search lawyers by name or specialization
const searchLawyers = async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).send({ message: 'Search query is required' });
    }

    const results = await LawyerModel.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { specialization: { $regex: query, $options: 'i' } }
      ]
    });

    res.status(200).send(results);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
};

module.exports = { addLawyer, searchLawyers };
