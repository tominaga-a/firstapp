const express = require('express');
const router = express.Router();

const allPosts = require('../controllers/posts/allPosts');
router.get('/posts', allPosts);

module.exports = router;