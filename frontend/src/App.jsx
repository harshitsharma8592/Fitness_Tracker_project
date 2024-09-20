import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AddUser from './components/AddUser';
import AddWorkout from './components/AddWorkout';
import UserList from './components/UserList';
import WorkoutList from './components/WorkoutList';
import Home from './components/Home';
import Profile from './components/Profile';
import UserProfile from './components/UserProfile';
import DietList from './components/DietList';
import AddDiet from './components/AddDiet';
import Footer from './components/Footer';
import './Footer.css';
import './App.css';
import ThemeToggle from './components/ThemeToggle';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/adduser">Add User</Link></li>
        <li><Link to="/addworkout">Add Workout</Link></li>
        <li><Link to="/userlist">User List</Link></li>
        <li><Link to="/workoutlist">Workout List</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/add-diet">Add Diet</Link></li>
        <li><Link to="/dietlist">Diet List</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
      <ThemeToggle/>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/addworkout" element={<AddWorkout />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/workoutlist" element={<WorkoutList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route path="/dietlist" element={<DietList />} />
          <Route path="/add-diet" element={<AddDiet />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
