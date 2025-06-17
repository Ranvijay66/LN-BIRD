const express = require('express');
const router = express.Router();
const upload = require('../middlewares/fileupload');

// ✅ Import all product controller functions
const {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/product.controller');

// ✅ Routes
router.post('/', upload.single('image'), addProduct); // Add product
router.get('/getproduct', getAllProducts);            // Get all products
router.get('/products/:_id', getProductById);         // Get single product by ID
router.put('/products/:_id', upload.single('image'), updateProduct); // Update product
router.delete('/products/:_id', deleteProduct);       // Delete product

module.exports = router;
