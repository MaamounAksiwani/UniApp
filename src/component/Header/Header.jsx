import React from 'react';
import './Header.css';
import { Container } from '@mui/material';
import ReactWOW from 'react-wow'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Header = () => {
    const handleClick = () => {
        const url = 'https://my.uni-app.com/sign-in?redirectURL=%2Fhome';
        window.location.href = url;
    };

    return (
        <body className='bodyHeaderUnderNavBar'>
            <div className="header-container">
                <div className="overlayImg"></div>
                <Container maxWidth="lg">
                    <div className="header-text">
                        <p className='mainTitle'>STUDY MASTER'S, BACHELOR'S OR A  POSTGRADUATE DEGREE</p>
                        <h1 className='subTitle'>Plan your future with UniApp</h1>
                        <p className='des'>Apply for the first time to college or transfer to finish your degree .<br /> With Uni App, you can manage the whole college application <br /> process.
                        </p>
                        <div className='headerButton' onClick={handleClick}>
                            <span>Start Your Application </span>
                            <span><ArrowForwardIosIcon style={{ fontSize: 15 }} /></span>
                        </div>
                    </div>
                </Container>
            </div>
        </body>
    );
}

export default Header;