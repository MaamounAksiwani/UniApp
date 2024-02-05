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
            <div style={{paddingTop:'50px' }}>
                <Container maxWidth="lg">
                    <div className='studentsPage-content headerRow'>
                        <div className='text-header'>
                            <h6> GET TO KNOW ABOUT <span>UNIAPP</span></h6>
                            <h1> Learn What <br/> <span className='title'>UniApp</span> Is Doing</h1>
                            <p>uni-app is an education technology built to support the international education stakeholders
                                . we simplify the admission process, scale up and diversify campuses worldwide.</p>
                        </div>
                        <div>
                        
                            <img src={img} alt="mobile image not found" className='mainImage' />

                        </div>
                    </div>
                </Container>
            </div>

        </>
    );
}
export default FirstSeciton;