const express = require('express');
const router = express.Router();
const upload = require('../middlewares/fileupload');
const {
  addBrand,
  getAllBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
} = require('../controllers/brand.controller');

router.post('/addbrand', upload.single('image'), addBrand);
router.get('/getbrands', getAllBrands);
router.get('/:id', getBrandById);           // Changed from '/brand/:id' to '/:id'
router.put('/:id', upload.single('image'), updateBrand);   // Changed from '/brand/:id' to '/:id'
router.delete('/:id', deleteBrand);         // Changed from '/brand/:id' to '/:id'

module.exports = router;
