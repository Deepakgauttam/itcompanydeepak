const express = require('express');
const { getContacts, createContact } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Route for handling contact-related requests
router
  .route('/')
  .get(protect, getContacts)  // Protect route to require authentication
  .post(createContact);        // Public route for creating new contact messages

module.exports = router;
