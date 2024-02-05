import React, { useState } from 'react';
import './index.css';
import { Container } from '@mui/material';
import img from '../../../until/Image/We-Have-a-Global-mission-768x516.jpg'
const SecondSection = () => {

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
                    <div className='studentsPage-content headerRows'>
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
                               
                            </div>

                        </div>

                        <div className='text-header holder'>


                            <h6 style={{fontWeight:'bold'}}> WHY ARE WE HERE?</h6>
                            <h1> We Have A <br/> <span className='title'>Global</span> Mission</h1>
                            <p>we want to empower international education and make sure everyone has the chance to access
                                quality education. we work passionately to bring the best education to study seekers.</p>
                        </div>

                    </div>
                </Container>
            </div>

        </>
    );
}
export default SecondSection;