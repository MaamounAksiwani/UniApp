import React from 'react';
import './footer.css';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import appStore from '../../../src/until/Image/PNG/uniapp-app-store-button-puswn7xt2crpcwmee11ctkgel7f4n8bb2cxw4cuebk.png';
import googlePlay from '../../../src/until/Image/PNG/uniapp-play-store-button-puswo8ligw5vxp55fyvt0t7dr8efzfcu7edtu5c1kw.png'


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from '../../../src/until/Image/barmer-logo.png'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='Footer'>
            <Container maxWidth="lg">
                <div className='footerContact'>

                    <div className='footerSection'>
                        <h4>Questions?</h4>
                        <p>Find frequently asked questions and answers about the study abroad journey. You are not alone; many students have similar questions. Explore now!</p>

                        <Link to='/faq/' className='faqBtn'>FAQ</Link>
                    </div>

                    <div className='footerSection'>
                        <h4>Explore</h4>
                        <div className='hoho'>
                            <ul>
                                <li onClick={() => navigate('/about-us/')}>About us</li>
                                <li>Universities</li>
                                <li onClick={() => navigate('/contact-us/')}>Contact us</li>
                            </ul>
                            <ul>
                                <li>Students</li>
                                <li>Recruitment Partners</li>
                                <img onClick={() => window.location.href = 'https://my.uni-app.com/sign-in?redirectURL=%2Finsurance%2Fbarmer'} src={Logo} alt='logo not found' />
                            </ul>
                        </div>
                    </div>

                    <div className='footerSection lastChild'>
                        <h4>Information</h4>
                        <div>
                            <ul>
                                <li onClick={() => navigate('/about-us/')}>About us</li>
                                <li>Universities</li>
                                <li onClick={() => navigate('/contact-us/')}>Contact us</li>
                            </ul>

                            <div>
                                <div className='download'>
                                    <a href="https://play.google.com/store/apps/details?id=com.neom_gmb_h.uni_app" target="_blank">
                                        <img src={appStore} alt="android not found" />
                                    </a>

                                    <a href="https://apps.apple.com/de/app/uniapp/id1636265816?l=en" target="_blank">

                                        <img src={googlePlay} alt=' apple not found' />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='socialMedia'
                >

                    <FacebookIcon style={{ color: '#ABABAB', fontSize: '18px', margin: '0px 7px' , cursor:'pointer' }} />

                    <TwitterIcon style={{ color: '#ABABAB', fontSize: '18px', margin: '0px 7px' , cursor:'pointer' }} />

                    <InstagramIcon style={{ color: '#ABABAB', fontSize: '18px', margin: '0px 7px' ,cursor:'pointer' }} />

                    <LinkedInIcon style={{ color: '#ABABAB', fontSize: '18px', margin: '0px 7px' , cursor:'pointer' }} />

                    <YouTubeIcon style={{ color: '#ABABAB', fontSize: '18px', margin: '0px 7px' , cursor:'pointer' }} />

                </div>


                <div className='copyRight'>
                © 2022 Uni-App. All Rights Reserved


                </div>
            </Container>
        </div>
    );
}

export default Footer;