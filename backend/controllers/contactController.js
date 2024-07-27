const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private
const getContacts = asyncHandler(async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (error) {
    res.status(500);
    throw new Error('Error fetching contacts');
  }
});

// @desc    Create a new contact message
// @route   POST /api/contact
// @access  Public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Please fill all the fields');
  }

  try {
    const contact = new Contact({ name, email, message });
    const createdContact = await contact.save();
    res.status(201).json(createdContact);
  } catch (error) {
    res.status(500);
    throw new Error('Error saving contact');
  }
});

module.exports = { getContacts, createContact };
