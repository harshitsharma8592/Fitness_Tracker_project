import React, { useState } from 'react';

const FollowButton = ({ userId, isFollowing }) => {
    const [following, setFollowing] = useState(isFollowing);

    const handleFollow = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:5000/api/users/follow/${userId}`, {
                method: 'PUT',
                headers: {
                    'x-auth-token': token,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setFollowing(true);
        } catch (error) {
            console.error("Error following user:", error);
        }
    };

    const handleUnfollow = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:5000/api/users/unfollow/${userId}`, {
                method: 'PUT',
                headers: {
                    'x-auth-token': token,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setFollowing(false);
        } catch (error) {
            console.error("Error unfollowing user:", error);
        }
    };

    return (
        <button onClick={following ? handleUnfollow : handleFollow}>
            {following ? 'Unfollow' : 'Follow'}
        </button>
    );
};

export default FollowButton;
