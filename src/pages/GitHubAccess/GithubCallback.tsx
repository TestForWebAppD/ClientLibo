import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GithubCallback: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            localStorage.setItem('authToken', token);
            console.log('GitHub token saved:', token);
            navigate('/recipes');
        } else {
            console.error('No token found in URL');
        }
    }, [navigate]);

    return (
        <div>
            <h1>Logging in with GitHub...</h1>
        </div>
    );
};

export default GithubCallback;
