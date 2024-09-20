import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
                    headers: {
                        'x-auth-token': token,
                    },
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${response.status} - ${errorText}`);
                }

                const data = await response.json();
                setUser(data);

                const followersResponse = await fetch(`http://localhost:5000/api/community/followers/${userId}`, {
                    headers: {
                        'x-auth-token': token,
                    },
                });

                if (!followersResponse.ok) {
                    const errorText = await followersResponse.text();
                    throw new Error(`Network response was not ok: ${followersResponse.status} - ${errorText}`);
                }

                const followersData = await followersResponse.json();
                setFollowers(followersData);

                const followingResponse = await fetch(`http://localhost:5000/api/community/following/${userId}`, {
                    headers: {
                        'x-auth-token': token,
                    },
                });

                if (!followingResponse.ok) {
                    const errorText = await followingResponse.text();
                    throw new Error(`Network response was not ok: ${followingResponse.status} - ${errorText}`);
                }

                const followingData = await followingResponse.json();
                setFollowing(followingData);
            } catch (error) {
                console.error('Error fetching user:', error);
                setError('Failed to fetch user');
            }
        };

        fetchUser();
    }, [userId]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <h3>Followers</h3>
                    <ul>
                        {followers.map((follower) => (
                            <li key={follower._id}>
                                {follower.name} - {follower.email}
                            </li>
                        ))}
                    </ul>
                    <h3>Following</h3>
                    <ul>
                        {following.map((followed) => (
                            <li key={followed._id}>
                                {followed.name} - {followed.email}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserProfile;
