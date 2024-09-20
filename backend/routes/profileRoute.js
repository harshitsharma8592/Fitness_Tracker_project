const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getProfile, updateProfile } = require('../controllers/profileController');

router.get('/', auth, getProfile); // To get profile
router.put('/', auth, updateProfile); // To update profile

module.exports = router;
