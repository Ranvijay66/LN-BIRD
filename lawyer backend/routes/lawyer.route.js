const express = require('express');
const router = express.Router();
const { addLawyer, searchLawyers } = require('../controllers/lawyer.controller');

// Add a new lawyer
router.post('/', addLawyer);

// Search lawyers by name or specialization
router.get('/search', searchLawyers);

module.exports = router;
