import React, { useEffect, useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router';
const Tabs = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        navigate(`/student-application-guide/${tabName}`);
    };

    useEffect(() => {
        setActiveTab('');
    }, [])
    return (
        <>
            <div
                onClick={() => handleTabClick('')}
                className={activeTab === '' ? 'activeTab' : ''}
            >
                <h4>Students Application Guide</h4>
            </div>
            <div
                onClick={() => handleTabClick('first-time-students')}
                className={activeTab === 'first-time-students' ? 'activeTab' : ''}
            >
                <h4>First-Time Students</h4>
            </div>
            <div
                onClick={() => handleTabClick('transfer-student')}
                className={activeTab === 'transfer-student' ? 'activeTab' : ''}
            >
                <h4>Transfer Students</h4>
            </div>
        </>
    );
}
export default Tabs;