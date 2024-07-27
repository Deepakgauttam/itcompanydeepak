const asyncHandler = require('express-async-handler');
const TeamMember = require('../models/TeamMember');

// @desc    Get all team members
// @route   GET /api/team
// @access  Public
const getTeamMembers = asyncHandler(async (req, res) => {
  const teamMembers = await TeamMember.find({});
  res.json(teamMembers);
});

// @desc    Create a new team member
// @route   POST /api/team
// @access  Private
const createTeamMember = asyncHandler(async (req, res) => {
  const { name, role, imageUrl } = req.body;

  const teamMember = new TeamMember({
    name,
    role,
    imageUrl,
  });

  const createdTeamMember = await teamMember.save();
  res.status(201).json(createdTeamMember);
});

module.exports = { getTeamMembers, createTeamMember };
