const asyncHandler = require('express-async-handler');
const Service = require('../models/Service');

// @desc    Get all services
// @route   GET /api/services
// @access  Public
const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find({});
  res.json(services);
});

// @desc    Create a new service
// @route   POST /api/services
// @access  Private
const createService = asyncHandler(async (req, res) => {
  const { title, description, imageUrl } = req.body;

  const service = new Service({
    title,
    description,
    imageUrl,
  });

  const createdService = await service.save();
  res.status(201).json(createdService);
});

module.exports = { getServices, createService };
