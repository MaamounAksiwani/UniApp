import React, { useState } from 'react';
import './index.css';
import mmp from "../../../src/until/Image/mmp.jpg"
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
                                <h1> Study  <span className='title'>Medicine </span> in <br /> Europe</h1>
                                <p>Study medicine in Europe in English. Get 100% guaranteed entry into Europe’s Best Medical Universities with our premium and extensive
                                    range of services, we completely take over and organise your applications at various universities
                                </p>
                                <div className='btnStyle' onClick={()=>{   window.location.href = 'https://uni-app.com/search';}}>
                                    <span>
                                        Discover Medicine Degrees
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
                                <img src={mmp} alt="mobile image not found" className='mainImage' />

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