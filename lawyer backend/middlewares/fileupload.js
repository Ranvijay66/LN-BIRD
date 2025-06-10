const multer = require('multer');
const path = require('path');

// ------------ Multer Configuration ------------

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Dynamically choose upload folder based on request
    const folder = req.uploadTarget === 'chat' ? 'uploads/chat' : 'uploads/lawyers';
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, filename);
  }
});

const fileFilter = (req, file, cb) => {
  // Allow only JPEG, PNG, and PDF files
  const allowedTypes = /jpeg|jpg|png|pdf/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Only images and PDFs are allowed'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter
});

module.exports = upload;
