import React, { useEffect, useState } from 'react';
import './index.css';
import { useNavigate , useLocation } from 'react-router';
const Tabs = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const isActive = (path) => currentPath === path ? 'active' : '';
    return (
        <>
            <div
               onClick={() => navigate('/student-application-guide/')}
               className={isActive('/student-application-guide/')}
            >
                <h4>Students Application Guide</h4>
            </div>
            <div
      
            onClick={() => navigate('/student-application-guide/first-time-students/')}
            className={isActive('/student-application-guide/first-time-students/')}
            >
                <h4>First-Time Students</h4>
            </div>
            <div
            onClick={() => navigate('/student-application-guide/transfer-student/')}
            className={isActive('/student-application-guide/transfer-student/')}
            >
                <h4>Transfer Students</h4>
            </div>
        </>
    );
}
export default Tabs;