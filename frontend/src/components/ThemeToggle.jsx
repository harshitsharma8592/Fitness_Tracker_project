import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // Initialize theme state from local storage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply theme class to body whenever theme state changes
  useEffect(() => {
    document.body.className = `${theme}-mode`;
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme in local storage
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggle;
