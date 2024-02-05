import React, { useState } from 'react';
import './index.css';
import { Container } from '@mui/material';
import img from '../../../until/Image/We-Have-a-Global-mission-768x516.jpg'
const SecondSection = () => {
    return (
        <>
            <div>
                <Container maxWidth="lg">
                    <div className='studentsPage-content headerRows'>
                        <div>
                            <img src={img} alt="mobile image not found" className='mainImage' />
                        </div>
                        <div className='text-header holder'>
                            <h6 style={{ fontWeight: 'bold' }}> WHY ARE WE HERE?</h6>
                            <h1> We Have A <br /> <span className='title'>Global</span> Mission</h1>
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