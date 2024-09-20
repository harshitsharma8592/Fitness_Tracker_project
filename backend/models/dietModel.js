// models/dietModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fat: { type: Number, required: true }
});

const dietSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  meals: [mealSchema]
});

const Diet = mongoose.model('Diet', dietSchema);

module.exports = Diet;
