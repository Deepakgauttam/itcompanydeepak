const express = require('express');
const { getServices, createService } = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .get(getServices)
  .post(protect, createService);

module.exports = router;
