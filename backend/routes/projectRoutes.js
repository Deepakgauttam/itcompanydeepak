const express = require('express');
const { getProjects, createProject } = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .get(getProjects)
  .post(protect, createProject);

module.exports = router;
