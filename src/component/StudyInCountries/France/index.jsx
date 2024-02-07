import React, { useState } from 'react';
import './index.css'
import { Container, TextField } from '@mui/material';
import FranceContent from './FranceContent/index'
const France = () => {
    const inputStyle = {
        backgroundColor: '#fff',
        borderRadius: '30px',
        margin: '0px 15px 0px 0px',
    };


    return (
        <>
            <div className="parentTheDiv">
                {/* <div className="backgroundImageCountry"></div> */}
                {/* <div className="CountryOverlay"></div> */}
                <Container maxWidth="lg">
                    <div className="CountryText">
                        <h1>Why study a Bachelor or Master in France</h1>
                        <p>Find all the study programs in France</p>
                        <div className='sssss'>
                            <TextField
                                fullWidth
                                className='input1'
                                placeholder='What do you want to study'
                                InputProps={{ style: { ...inputStyle } }}
                            />
                            <button className='searchBtn'> Search</button>
                        </div>
                    </div>




                </Container>

            </div>

            <FranceContent />
        </>

    );
}
export default France;