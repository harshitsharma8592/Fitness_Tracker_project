const express = require('express');
const router = express.Router();
const { getUsers, addUser } = require('../controllers/userController');
const { followUser, unfollowUser, getFollowers, getFollowing } = require('../controllers/communityController');
const auth = require('../middleware/authMiddleware');

// User routes
router.get('/', auth, getUsers);
router.post('/add', auth, addUser);

// Community routes
router.put('/follow/:id', auth, followUser);
router.put('/unfollow/:id', auth, unfollowUser);
router.get('/followers/:id', auth, getFollowers);
router.get('/following/:id', auth, getFollowing);

module.exports = router;
