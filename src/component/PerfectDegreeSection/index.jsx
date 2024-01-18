
import React from 'react';
import './PerfectDegreeSection.css';
import Container from "@mui/material/Container";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const PerfectDegreeSection = () => {
    return (
        <div style={{padding:'50px 0px 0px 0px'}}>  
            <Container maxWidth="lg">
                <p style={{ textAlign: 'center', fontSize: '23px', fontWeight: 300 }}>WHAT DEGREE ARE YOU LOOKING FOR?</p>
                <h1 style={{ textAlign: 'center', color: '#333', fontSize: '36px' }}>Find Your <span className='title'>Perfect Degree </span>To Study Abroad Or Online</h1>

                <div className='cardBox'>
                    <div className='cardC'>
                        <img src='https://uni-app.com/wp-content/uploads/2022/03/bachelor.svg' alt='Image 1' />
                        <h2>Bachelor's Degree</h2>
                        <p>You are planning to start your Bachelor’s degrees?</p>
                        <div>
                            <div className='link'>
                                <a>Search Bachelors </a>
                                <ArrowForwardIcon />
                            </div>
                        </div>
                    </div>
                    <div className='cardC'>
                        <img src='https://uni-app.com/wp-content/uploads/2022/03/bachelor.svg' alt='Image 2' />
                        <h2>Master's Degree</h2>
                        <p>You are planning to start your Master’s degrees?</p>
                        <div className='link'>
                            <a>Search Bachelors </a>
                            <ArrowForwardIcon />
                        </div>
                    </div>
                    <div className='cardC'>
                        <img src='https://uni-app.com/wp-content/uploads/2022/03/bachelor.svg' alt='Image 3' />
                        <h2>Online Degrees</h2>
                        <p>You are planning to start your Online degrees?</p>
                        <div className='link'>
                            <a>Search Online courses </a>
                            <ArrowForwardIcon />
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default PerfectDegreeSection;
