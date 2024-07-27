const express = require('express');
const { getBlogs, createBlog } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .get(getBlogs)
  .post(protect, createBlog);

module.exports = router;
