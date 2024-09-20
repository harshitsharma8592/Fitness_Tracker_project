import React, { useState, useEffect } from 'react';

const FollowersList = ({ userId }) => {
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const fetchFollowers = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await fetch(`http://localhost:5000/api/users/followers/${userId}`, {
                    headers: {
                        'x-auth-token': token,
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setFollowers(data);
            } catch (error) {
                console.error("Error fetching followers:", error);
            }
        };

        fetchFollowers();
    }, [userId]);

    return (
        <div>
            <h3>Followers</h3>
            <ul>
                {followers.map((follower) => (
                    <li key={follower._id}>
                        {follower.name} - {follower.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FollowersList;
