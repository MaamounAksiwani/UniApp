import React from 'react';
import './index.css';
import { Container } from '@mui/material';
const Header = () => {
    return (
        <>
            <div style={{ padding: '0px 0px 50px 0px' }}>
                <div className='Container-studentsPage'>
                    <Container maxWidth="lg">
                        <div className='studentsPage-content'>
                            <div>
                                <p style={{ fontWeight: '500' }}>PARTNERSHIP WITH  <span className='title'>UNIAPP</span> </p>
                                <h1> Scale-Up And <br /> <span className='title'>Diversify</span> Your School </h1>
                                <p>UniApp is your long-term partner to increase your global reach.
                                    Get access to thousands of vetted and well trained recruitment partners
                                    .</p>
                                <div className='btnStyle'>
                                    <span>
                                        <a> Partner With Us</a>
                                    </span>
                                </div>
                            </div>
                            <div className='count'>
                                <div>
                                    <div>
                                        <h1>50+</h1>
                                        <p> Team Members</p>
                                    </div>
                                    <div>
                                        <h1>80+</h1>
                                        <p> Student's nationality </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h1>99+</h1>
                                        <p> satisfaction rate</p>
                                    </div>  <div>
                                        <h1>1.000+</h1>
                                        <p>vetted agents </p>
                                    </div>
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