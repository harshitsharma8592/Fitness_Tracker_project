// controllers/workoutController.js
const Workout = require('../models/workoutModel');

exports.addWorkout = async (req, res) => {
    const { date, type, duration, caloriesBurned } = req.body;

    try {
        const workout = new Workout({
            user: req.user.id,
            date,
            type,
            duration,
            caloriesBurned
        });
        await workout.save();
        res.json(workout);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.user.id }).populate('user', 'name email');
        res.json(workouts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

