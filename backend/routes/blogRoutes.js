// const express = require('express');
// const router = express.Router();
// const blogController = require('../controllers/blogController');

// router.route('/')
//   .get(blogController.getAllBlogPosts)
//   .post(blogController.createBlogPost);

// router.route('/:id')
//   .get(blogController.getBlogPostById)
//   .put(blogController.updateBlogPost)
//   .delete(blogController.deleteBlogPost);

// module.exports = router;


const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getAllBlogPosts);
router.get('/:id', blogController.getBlogPostById);
router.post('/', blogController.createBlogPost);
router.put('/:id', blogController.updateBlogPost);
router.delete('/:id', blogController.deleteBlogPost);

module.exports = router;







// const express = require("express");
// const router = express.Router();
// const blogController = require("../controllers/blogController");

// router.get("/", blogController.getAllBlogPosts);
// router.get("/:id", blogController.getBlogPostById);
// router.post("/", blogController.createBlogPost);
// router.put("/:id", blogController.updateBlogPost);
// router.delete("/:id", blogController.deleteBlogPost);

// module.exports = router;


