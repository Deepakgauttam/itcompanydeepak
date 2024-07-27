const express = require('express');
const { getTeamMembers, createTeamMember } = require('../controllers/teamController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .get(getTeamMembers)
  .post(protect, createTeamMember);

module.exports = router;
