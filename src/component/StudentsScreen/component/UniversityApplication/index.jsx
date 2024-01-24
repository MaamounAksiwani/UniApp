import React, { useState } from 'react';
import './index.css';
import { Container } from '@mui/material';
const UniversityApplication = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <>
            <div style={{ backgroundColor: '#0077A7ad', padding:'36px' }}>
                <Container maxWidth="lg">
                    <div className={`rightSide hover-text ${isHovered ? 'hovered' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <img src='https://uni-app.com/wp-content/uploads/2022/04/signs-post-light.svg' alt="image not found"  className='imgIcon' />
                    </div>
                    <div className='sideMain'>

                        <h2 style={{ color: '#fff' }}> You can be your own guiding star with our help!</h2>

                        <h1 style={{ textAlign: 'center', color: "#fff", fontSize: "36px" }}>You can be your own guiding star with our help!
                        </h1>

                        <div className='UniversityApplicationBtn'>
                            <span>
                                <a> Student Application Guide </a>
                            </span>
                        </div>
                    </div>
                    <div className={`hover-text ${isHovered ? 'hovered' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <img src='https://uni-app.com/wp-content/uploads/2022/03/envelope-open-text-light-2.svg' alt="image not found" className='imgIcon' />
                    </div>
                </Container>
            </div>
        </>
    );
}
export default UniversityApplication;