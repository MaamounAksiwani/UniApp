import React from 'react';
import './footer.css';
import { Container } from '@mui/material';
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router';

import Logo from '../../../src/until/Image/barmer-logo.png'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='Footer'>
            <Container maxWidth="lg">
                <footer class="footer">
                    <div class="container row">
                        <div class="footer-col">
                            <h4>Questions ?</h4>
                            <p>Find the frequently asked questions and answers about the study abroad journey.
                                You are not alone, many of the students have the same questions like you. Explore now!</p>
                            <div style={{ marginTop: "25px" }}>

                                {/* <Link to='/faq/' className='faqBtn'>FAQ</Link> */}
                            </div>
                        </div>
                        <div class="footer-col">
                            <h4>Explore</h4>
                            <div className='hoho'>
                                <ul>
                                    <li onClick={() => { navigate('/about-us/') }}>About us</li>
                                    <li>Universities</li>
                                    <li onClick={() => { navigate('/contact-us/') }}>Contact us</li>
                                </ul>
                                <ul>
                                    <li>Students</li>
                                    <li>Recruitment Partners</li>
                                    <img onClick={() => { window.location.href = 'https://my.uni-app.com/sign-in?redirectURL=%2Finsurance%2Fbarmer' }} src={Logo} alt='logo not found' />
                                </ul>
                            </div>
                        </div>
                        <div class="footer-col">
                            <h4>Information</h4>
                            <ul>
                                <li>Privacy</li>
                                <li>Impressum</li>
                                <li>Terms</li>
                            </ul>
                            <div>
                                <div className='download'>
                                    <a href="https://play.google.com/store/apps/details?id=com.neom_gmb_h.uni_app" target="_blank">
                                        <img src="https://uni-app.com/wp-content/uploads/2022/09/uniapp-play-store-button.png" alt="android not found" />
                                    </a>

                                    <a href="https://apps.apple.com/de/app/uniapp/id1636265816?l=en" target="_blank">

                                        <img src="https://uni-app.com/wp-content/uploads/2022/09/uniapp-app-store-button.png" alt=' apple not found' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 style={{ textAlign: 'center', marginTop: '50px', fontWeight: '100' }}>© 2022 Uni-App. All Rights Reserved</h4>
                </footer>
            </Container>
        </div>
    );
}

export default Footer;