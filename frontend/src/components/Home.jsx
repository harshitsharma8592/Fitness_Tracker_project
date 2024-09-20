// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to the Fitness Tracker</h1>
      <p>Track your workouts, manage users, and stay fit!</p>
      <p>
        Use the navigation bar to access different features:
      </p>
      <ul>
        <li><strong>Register:</strong> Create a new user account.</li>
        <li><strong>Login:</strong> Access your account.</li>
        <li><strong>Add User:</strong> Add a new user to the system.</li>
        <li><strong>Add Workout:</strong> Log your workouts.</li>
        <li><strong>User List:</strong> View all registered users.</li>
        <li><strong>Workout List:</strong> View all logged workouts.</li>
      </ul>
    </div>
  );
};

export default Home;
