const express = require('express');
const router = express.Router();
const { addDiet, getDiets, updateDiet } = require('../controllers/dietController');
const auth = require('../middleware/authMiddleware');

// Diet routes
router.post('/', auth, addDiet);
router.get('/', auth, getDiets);
router.put('/:id', auth, updateDiet);

module.exports = router;
