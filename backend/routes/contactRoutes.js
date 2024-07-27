const express = require('express');
const { getContacts, createContact } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .get(protect, getContacts)
  .post(createContact);

module.exports = router;
