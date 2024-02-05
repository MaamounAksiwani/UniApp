import React, { useState } from 'react';
import './index.css';
import { Container } from '@mui/material';
const Header = () => {
    return (
        <>
            <div className='studentsPage'>
                <div className='Container-studentsPage'>
                    <Container maxWidth="lg">
                        <div className='studentsPage-content'>
                            <div>
                                <h1> <span className='title'>Study</span> in Europe <br /> and Worldwide</h1>
                                <p>Apply for a Masters's degree or a bachelor's degree and discover schools, get 1-on-1
                                    support from our study agents to start your dream at the best Universities, and easily submit your applications. Uni-App guides you!.</p>
                                <div className='btnStyle'>
                                    <span>
                                        <a> Discover degrees worldwide</a>
                                    </span>
                                </div>
                            </div>
                            <div>

                                <img src="https://uni-app.com/wp-content/uploads/2022/03/uniapp_students.jpg" alt="mobile image not found" className='mainImage' />



                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}
export default Header;