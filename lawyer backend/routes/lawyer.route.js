const express = require('express');
const router = express.Router();
const lawyerController = require('../controllers/lawyer.controller');
const upload = require('../middlewares/fileupload');
const authMiddleware = require('../middlewares/auth'); // Middleware to authenticate lawyer

// ---------- Public Endpoints ----------

// Add a new lawyer (basic info)
router.post('/', lawyerController.addLawyer);

// Search lawyers by name or specialization
router.get('/search', lawyerController.searchLawyers);
router.post('/login', lawyerController.loginLawyer);


// Register lawyer with multi-file upload for documents
router.post('/register/lawyer', upload.array('documents', 5), lawyerController.registerLawyer);

// ---------- Protected Lawyer Actions (requires auth) ----------

router.get('/profile', authMiddleware, lawyerController.getProfile);
router.put('/profile', authMiddleware, lawyerController.updateProfile);
router.put('/availability', authMiddleware, lawyerController.updateAvailability);
router.post('/availability/toggle', authMiddleware, lawyerController.toggleOnlineStatus);

module.exports = router;
