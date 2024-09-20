import React, { useState, useEffect } from 'react';

const UpdateProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch current user data here (optional)
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:5000/api/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
                body: JSON.stringify({ name, email, currentPassword, newPassword }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }

            const data = await response.json();
            alert('Profile updated successfully');
        } catch (error) {
            console.error("Error updating profile:", error);
            setError("Error updating profile: " + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Profile</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="New Password (optional)"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default UpdateProfile;
