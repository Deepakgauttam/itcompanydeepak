const asyncHandler = require('express-async-handler');
const Blog = require('../models/Blog');

// @desc    Get all blog posts
// @route   GET /api/blog
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

// @desc    Create a new blog post
// @route   POST /api/blog
// @access  Private
const createBlog = asyncHandler(async (req, res) => {
  const { title, content, imageUrl } = req.body;

  const blog = new Blog({
    title,
    content,
    imageUrl,
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

module.exports = { getBlogs, createBlog };
