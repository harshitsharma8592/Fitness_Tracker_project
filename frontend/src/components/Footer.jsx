// src/Footer.js
import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Our fitness tracker helps you stay on top of your fitness goals with ease. Track your workouts, monitor your progress, and achieve your fitness objectives with our user-friendly platform.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/workouts">Workouts</a></li>
            <li><a href="/goals">Goals</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@fitnesstracker.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Fitness St, Workout City, Fitland</p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Fitness Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
