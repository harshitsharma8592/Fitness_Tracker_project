// controllers/dietController.js
const Diet = require('../models/dietModel');

exports.addDiet = async (req, res) => {
    const { date, meals } = req.body;

    try {
        const diet = new Diet({
            user: req.user.id,
            date,
            meals
        });
        await diet.save();
        res.json(diet);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getDiets = async (req, res) => {
    try {
        const diets = await Diet.find({ user: req.user.id });
        res.json(diets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateDiet = async (req, res) => {
    try {
        const diet = await Diet.findById(req.params.id);

        if (!diet) {
            return res.status(404).json({ msg: 'Diet record not found' });
        }

        // Ensure user owns diet
        if (diet.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        const updatedDiet = await Diet.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json(updatedDiet);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
