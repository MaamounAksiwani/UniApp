import React, { useEffect } from 'react';
import './index.css';
import { useLocation, useNavigate } from 'react-router';

const Pages = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    useEffect(() => {
    }, []);

    const isActive = (path) => currentPath === path ? 'active' : '';

    return (
        <>
            <div
                className={isActive('/privacy/')}
                onClick={() => navigate('/privacy/')}
            >
                <h4>Privacy Policy</h4>
            </div>
            <div
                className={isActive('/impressum')}
                onClick={() => navigate('/impressum')}
            >
                <h4>Impressum</h4>
            </div>
            <div
                className={isActive('/terms')}
                onClick={() => navigate('/terms')}
            >
                <h4>Terms</h4>
            </div>
        </>
    );
}

export default Pages;
