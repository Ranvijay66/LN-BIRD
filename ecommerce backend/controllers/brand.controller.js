const BrandModel = require('../models/brand.model');

// ✅ Add new brand
const addBrand = async (req, res) => {
  try {
    const { name, email, website, location, description, status } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !email || !status || !image) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    const newBrand = new BrandModel({
      name,
      email,
      website,
      location,
      description,
      status,
      image,
    });

    const savedBrand = await newBrand.save();
    res.status(201).json(savedBrand);
  } catch (error) {
    console.error('Error adding brand:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Get all brands
const getAllBrands = async (req, res) => {
  try {
    const brands = await BrandModel.find();
    res.status(200).json(brands);
  } catch (error) {
    console.error('Error fetching brands:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Get brand by ID
const getBrandById = async (req, res) => {
  try {
    const brand = await BrandModel.findById(req.params.id);
    if (!brand) return res.status(404).json({ error: 'Brand not found' });
    res.status(200).json(brand);
  } catch (error) {
    console.error('Error fetching brand by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Update brand
const updateBrand = async (req, res) => {
  try {
    const { name, email, website, location, description, status } = req.body;
    const image = req.file ? req.file.filename : undefined;

    const updatedBrand = await BrandModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        website,
        location,
        description,
        status,
        ...(image && { image })
      },
      { new: true }
    );

    if (!updatedBrand) return res.status(404).json({ error: 'Brand not found' });
    res.status(200).json(updatedBrand);
  } catch (error) {
    console.error('Error updating brand:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Delete brand
const deleteBrand = async (req, res) => {
  try {
    const deleted = await BrandModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Brand not found' });
    res.status(200).json({ message: 'Brand deleted successfully' });
  } catch (error) {
    console.error('Error deleting brand:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addBrand,
  getAllBrands,
  getBrandById,
  updateBrand,
  deleteBrand
};
