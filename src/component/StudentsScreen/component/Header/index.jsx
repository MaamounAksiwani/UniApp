import React, { useState } from 'react';
import './index.css';
import { Container } from '@mui/material';
const Header = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <>
            <div className='studentsPage'>
                <div className='Container-studentsPage'>
                    <Container maxWidth="lg">
                        <div className='studentsPage-content'>
                            <div>
                                <h1> <span className='title'>Study</span> in Europe and Worldwide</h1>
                                <p>Apply for a Masters's degree or a bachelor's degree and discover schools, get 1-on-1
                                    support from our study agents to start your dream at the best Universities, and easily submit your applications. Uni-App guides you!.</p>
                                <div className='btnStyle'>
                                    <span>
                                        <a> Discover degrees worldwide</a>
                                    </span>
                                </div>
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
                                    <img src='https://uni-app.com/wp-content/uploads/2022/04/plus-light.svg' className='imageHeader' alt='not found' />
                                    <img
                                        src="https://uni-app.com/wp-content/uploads/2022/04/feather-pointed-light.svg"
                                        className='imageHeader'
                                        alt="not found"
                                    />
                                </div>
                                <img src="https://uni-app.com/wp-content/uploads/2022/03/uniapp_students.jpg" alt="mobile image not found" className='mainImage' />

                                <div className={`hover-text ${isHovered ? 'hovered' : ''}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave} style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                    <img src='https://uni-app.com/wp-content/uploads/2022/04/book-open-light.svg' className='imageHeader' alt='not found' />
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
            </div>
        </>
    );
}
export default Header;