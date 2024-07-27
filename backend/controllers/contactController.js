const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({});
  res.json(contacts);
});

// @desc    Create a new contact message
// @route   POST /api/contact
// @access  Public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  const contact = new Contact({
    name,
    email,
    message,
  });

  const createdContact = await contact.save();
  res.status(201).json(createdContact);
});

module.exports = { getContacts, createContact };
