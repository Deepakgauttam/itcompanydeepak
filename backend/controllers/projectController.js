const asyncHandler = require('express-async-handler');
const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({});
  res.json(projects);
});

// @desc    Create a new project
// @route   POST /api/projects
// @access  Private
const createProject = asyncHandler(async (req, res) => {
  const { title, description, imageUrl } = req.body;

  const project = new Project({
    title,
    description,
    imageUrl,
  });

  const createdProject = await project.save();
  res.status(201).json(createdProject);
});

module.exports = { getProjects, createProject };
