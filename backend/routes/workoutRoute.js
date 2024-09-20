const express = require('express');
const router = express.Router();
const { addWorkout, getWorkouts } = require('../controllers/workoutController');
const auth = require('../middleware/authMiddleware');

router.post('/add', auth, addWorkout);
router.get('/', auth, getWorkouts);

module.exports = router;
