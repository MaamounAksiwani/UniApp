import React, { useState } from 'react';
import './index.css';
import { Container } from '@mui/material';
import img from '../../../src/until/Image/PNG/mlp-600x403.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const SecondSection = () => {


    return (
        <>
            <div style={{ padding: '50px 0px' }}>
                <Container maxWidth="lg">
                    <div className='studentsPage-content headerRows'>
                        <div>

                            <img src={img} alt="mobile image not found" className='mainImage' />



                        </div>

                        <div className='text-header holder'>


                            <h6 style={{ fontWeight: 'bold' }}> MEDICAL DEGREES IN EUROPE</h6>
                            <h1> Access To <br /> <span className='title'>International Medical </span> Studies</h1>
                            <p>The medical schools in Europe follow an EU-wide standard and are recognized worldwide. Studying medicine abroad and completing
                                specialist training in your home country is therefore already a common practice. An experienced team takes care of the application
                                process and provides materials for any entrance exams.
                                .</p>
                            <div style={{ display: 'flex', alignItems: 'center' , padding:'10px 0px' , fontWeight:'800' , fontSize:'12px' , cursor:'pointer' }}>
                                <p style={{color:'#333'}}> Find Medicine Degrees in Europe</p>
                                <ArrowRightAltIcon style={{ color: '#333' }} />
                            </div>
                        </div>

                    </div>
                </Container>
            </div>

        </>
    );
}
export default SecondSection;