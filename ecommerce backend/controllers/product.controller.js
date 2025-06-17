const ProductModel = require('../models/product.model');

// ✅ Add a new product
const addProduct = async (req, res) => {
  try {
    const { title, description, price, sku, quantity, discount, brand, unit, variations, categories, tags, colors } = req.body;

    const image = req.file ? req.file.filename : null;

    const newProduct = new ProductModel({
      title,
      description,
      price,
      sku,
      quantity,
      discount,
      brand,
      unit,
      variations,
      categories,
      tags,
      colors,
      image
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);

  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params._id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Update a product
const updateProduct = async (req, res) => {
  try {
    const updateData = req.body;
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params._id, updateData, { new: true });
    if (!updatedProduct) return res.status(404).json({ error: 'Product not found' });

    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Delete a product
const deleteProduct = async (req, res) => {
  try {
    const deleted = await ProductModel.findByIdAndDelete(req.params._id);
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
