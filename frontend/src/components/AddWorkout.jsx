import React, { useState } from 'react';

const AddWorkout = () => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/workouts/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ date, type, duration, caloriesBurned }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      console.log('Workout added:', data);
    } catch (err) {
      setError(err.message);
      console.error('Error adding workout:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Type:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </div>
      <div>
        <label>Duration:</label>
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>
      <div>
        <label>Calories Burned:</label>
        <input type="number" value={caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.value)} />
      </div>
      <button type="submit">Add Workout</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddWorkout;
