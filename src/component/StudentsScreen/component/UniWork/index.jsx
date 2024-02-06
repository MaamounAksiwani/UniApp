import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const UniWork = () => {
    return (
        <div style={{ padding: '100px 0px' }}>

            <Container maxWidth="lg">
                <p style={{ textAlign: 'center', color: "#696969", fontWeight: "500" }}>IN EASY STEPS</p>
                <h1 style={{ textAlign: 'center' }}>How  <span className='title'> Uni-App </span>  Works</h1>
                <div className='cardBox'>
                    <div className='cardWork'>
                        <img src='https://uni-app.com/wp-content/uploads/2022/03/complete-your-profile-200x200.png' alt='Image 1' />
                        <h2>Complete Your Profile</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <div>
                            <div className='link'>
                                <a style={{fontWeight:'bold'}}> Create Account </a>
                                <ArrowForwardIcon  style={{ fontSize: '18px', marginLeft: '10px' }} />

                                {/* IN EASY STEPS */}
                            </div>
                        </div>
                    </div>
                    <div className='cardWork'>
                        <img src='https://uni-app.com/wp-content/uploads/2022/03/explore-study-programs-200x200.png' alt='Image 2' />
                        <h2> Explore Study Programs</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>                        <div className='link'>
                            <a style={{fontWeight:'bold'}}>Explore Program </a>
                            <ArrowForwardIcon style={{ fontSize: '18px', marginLeft: '10px' }}  />
                        </div>
                    </div>
                    <div className='cardWork'>
                        <img src='https://uni-app.com/wp-content/uploads/2022/03/apply-to-school-200x200.png' alt='Image 3' />
                        <h2>Apply to School</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>                        <div className='link'>
                            <a style={{fontWeight:'bold'}}>Get Started </a>
                            <ArrowForwardIcon style={{ fontSize: '18px', marginLeft: '10px' }}  />
                        </div>
                    </div>
                </div>
            </Container>


        </div>
    );
}
export default UniWork;