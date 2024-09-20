import React, { useState } from 'react';

const AddDiet = () => {
  const [date, setDate] = useState('');
  const [meal, setMeal] = useState({ name: '', calories: '', protein: '', carbs: '', fat: '' });
  const [meals, setMeals] = useState([]);

  const handleAddMeal = () => {
    setMeals([...meals, meal]);
    setMeal({ name: '', calories: '', protein: '', carbs: '', fat: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/api/diet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ date, meals }),
    });

    if (res.ok) {
      alert('Diet added successfully');
      setDate('');
      setMeals([]);
    } else {
      alert('Failed to add diet');
    }
  };

  return (
    <div className={`add-diet-container ${document.body.className}`}>
      <h1>Add Diet</h1>
      <form onSubmit={handleSubmit}>
        <label className={`form-label ${document.body.className}`}>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className={`form-input ${document.body.className}`}
          />
        </label>
        <br />
        <label className={`form-label ${document.body.className}`}>
          Meal Name:
          <input
            type="text"
            value={meal.name}
            onChange={(e) => setMeal({ ...meal, name: e.target.value })}
            required
            className={`form-input ${document.body.className}`}
          />
        </label>
        <br />
        <label className={`form-label ${document.body.className}`}>
          Calories:
          <input
            type="number"
            value={meal.calories}
            onChange={(e) => setMeal({ ...meal, calories: e.target.value })}
            required
            className={`form-input ${document.body.className}`}
          />
        </label>
        <br />
        <label className={`form-label ${document.body.className}`}>
          Protein:
          <input
            type="number"
            value={meal.protein}
            onChange={(e) => setMeal({ ...meal, protein: e.target.value })}
            required
            className={`form-input ${document.body.className}`}
          />
        </label>
        <br />
        <label className={`form-label ${document.body.className}`}>
          Carbs:
          <input
            type="number"
            value={meal.carbs}
            onChange={(e) => setMeal({ ...meal, carbs: e.target.value })}
            required
            className={`form-input ${document.body.className}`}
          />
        </label>
        <br />
        <label className={`form-label ${document.body.className}`}>
          Fat:
          <input
            type="number"
            value={meal.fat}
            onChange={(e) => setMeal({ ...meal, fat: e.target.value })}
            required
            className={`form-input ${document.body.className}`}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddMeal} className={`form-button ${document.body.className}`}>Add Meal</button>
        <br />
        <button type="submit" className={`form-button ${document.body.className}`}>Submit</button>
      </form>
      <h2>Meals</h2>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>
            {meal.name} - Calories: {meal.calories}, Protein: {meal.protein}g, Carbs: {meal.carbs}g, Fat: {meal.fat}g
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddDiet;
