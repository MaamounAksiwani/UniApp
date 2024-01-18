import React from 'react';
import './Header.css';
import {
    Container
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Header = () => {
    return (
        <>
            <div className="header-container">
                <Container maxWidth="lg">
                    <div className="header-text">
                        <p className='mainTitle'>
                            STUDY MASTER'S, BACHELOR'S OR A <br /> POSTGRADUATE DEGREE
                        </p>
                        <h1 className='subTitle'>Plan your future <br /> with UniApp</h1>
                        <p className='des'>Apply for the first time to college or transfer to finish your degree .<br /> With Uni App, you can manage the whole college application <br /> process.
                        </p>

                        <div className='headerButton'>

                            <span>Start Your Application </span>
                            <span><ArrowForwardIosIcon style={{ fontSize: 15 }} /></span>
                        </div>

                    </div>

                </Container>
            </div>
        </>
    );
}

export default Header;