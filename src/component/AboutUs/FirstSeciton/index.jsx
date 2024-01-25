import React, { useState } from 'react';
import './index.css';
import { Container } from '@mui/material';
import img from '../../../until/Image/Learn-what-UniApp-is-doing.jpg'
const FirstSeciton = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <>
            <div style={{ padding: '50px 0px' }}>
                <Container maxWidth="lg">
                    <div className='studentsPage-content headerRow'>
                        <div className='text-header'>
                            <h6> GET TO KNOW ABOUT <span>UNIAPP</span></h6>
                            <h1> Learn What <br/> <span className='title'>UniApp</span> Is Doing</h1>
                            <p>uni-app is an education technology built to support the international education stakeholders
                                . we simplify the admission process, scale up and diversify campuses worldwide.</p>
                        </div>
                        <div>
                            <div className={`hover-text ${isHovered ? 'hovered' : ''}`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} style={{
                                    margin: '25px 0px',
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                <img src='https://uni-app.com/wp-content/uploads/2022/03/globe-light.svg' className='imageHeader' alt='not found' />
                                <img
                                    src="https://uni-app.com/wp-content/uploads/2022/04/plus-light.svg"
                                    className='imageHeader'
                                    alt="not found"
                                />
                            </div>
                            <img src={img} alt="mobile image not found" className='mainImage' />

                            <div className={`hover-text ${isHovered ? 'hovered' : ''}`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                <img src='https://uni-app.com/wp-content/uploads/2022/03/expand-light.svg' className='imageHeader' alt='not found' />
                                <img
                                    src="https://uni-app.com/wp-content/uploads/2022/04/diamond-light.svg"
                                    className='imageHeader'
                                    alt="not found"
                                />
                            </div>

                        </div>
                    </div>
                </Container>
            </div>

        </>
    );
}
export default FirstSeciton;