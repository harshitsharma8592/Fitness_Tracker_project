import React, { useState, useEffect } from 'react';

const FollowingList = ({ userId }) => {
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        const fetchFollowing = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await fetch(`http://localhost:5000/api/users/following/${userId}`, {
                    headers: {
                        'x-auth-token': token,
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setFollowing(data);
            } catch (error) {
                console.error("Error fetching following:", error);
            }
        };

        fetchFollowing();
    }, [userId]);

    return (
        <div>
            <h3>Following</h3>
            <ul>
                {following.map((followedUser) => (
                    <li key={followedUser._id}>
                        {followedUser.name} - {followedUser.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FollowingList;
