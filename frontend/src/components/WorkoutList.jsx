import React, { useState, useEffect } from 'react';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/api/workouts', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setWorkouts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h1>Workout List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id}>
            {workout.user.name} - {workout.type} on {new Date(workout.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
