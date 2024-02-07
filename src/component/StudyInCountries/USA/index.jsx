import React from 'react';
import './index.css'
import { Container, TextField } from '@mui/material';
import USAContent from './USAContent/index'
const USA = () => {
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
                        <h1>Why study a Bachelor or Master in USA</h1>
                        <p>Find all the study programs in USA</p>
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

            <USAContent />
        </>

    );
}
export default USA;