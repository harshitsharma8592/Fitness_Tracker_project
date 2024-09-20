import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [following, setFollowing] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/api/users', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  const handleFollow = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/users/follow/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      setFollowing((prev) => ({
        ...prev,
        [userId]: true,
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUnfollow = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/users/unfollow/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      setFollowing((prev) => ({
        ...prev,
        [userId]: false,
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            {following[user._id] ? (
              <button onClick={() => handleUnfollow(user._id)}>Unfollow</button>
            ) : (
              <button onClick={() => handleFollow(user._id)}>Follow</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
