const express = require('express');

const { addProduct } = require('../controllers/product.controller');
const upload = require('../middlewares/fileupload');
const router= express.Router();


router.post('/',upload.single('image'),addProduct );









module.exports = router;