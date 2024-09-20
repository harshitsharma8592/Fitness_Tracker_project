// DietList.jsx
import React, { useState, useEffect } from 'react';

const DietList = () => {
  const [diets, setDiets] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDiets = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/api/diet', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setDiets(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDiets();
  }, []);

  return (
    <div>
      <h1>Diet List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {diets.map((diet) => (
          <li key={diet._id}>
            <strong>Date:</strong> {new Date(diet.date).toLocaleDateString()}
            <ul>
              {diet.meals.map((meal, index) => (
                <li key={index}>
                  <strong>Meal:</strong> {meal.name}, 
                  <strong>Calories:</strong> {meal.calories}, 
                  <strong>Protein:</strong> {meal.protein}g, 
                  <strong>Carbs:</strong> {meal.carbs}g, 
                  <strong>Fat:</strong> {meal.fat}g
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DietList;
