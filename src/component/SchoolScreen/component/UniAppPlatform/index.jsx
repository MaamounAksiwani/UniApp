import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake'
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';

import DeveloperBoardTwoToneIcon from '@mui/icons-material/DeveloperBoardTwoTone';
import StorageTwoToneIcon from '@mui/icons-material/StorageTwoTone';
import KeyboardDoubleArrowUpTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowUpTwoTone';
const UniAppPlatform = () => {


    return (
        <>
            <div className="uniAppPlatform">
                <Container maxWidth="lg">

                    <p style={{textAlign:'center' , color:"#696969"}}>MAXIMIZE REACH</p>
                    <h1 style={{textAlign:'center'}}>UniApp is <span className='title'>One Platform</span> Built to Place <br /> Students and Deliver Quality Applications</h1>

                    <div className='main-content'>
                        <div className='left-side'>
                            <div className='first-section'>
                                <div>
                                    <div>
                                    <LanguageTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />                                        <h3 style={{marginBottom:'5px'}}>Global Targets</h3>
                                        <p style={{marginTop:'0'}}>From the comfort of your home, schedule a meeting with an expert and receive a free consultation.</p>
                                    </div>

                                </div>
                                <div>
                                    <DeveloperBoardTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                                    <h3 style={{marginBottom:'5px'}}>Pre Scanning</h3>
                                    <p style={{marginTop:'0'}}>With your profile, you will be able to apply for multiple programs with one click.</p>

                                </div>
                            </div>
                            <div className='first-section'>
                                <div>
                                    <div>
                                        <StorageTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                                        <h3 style={{marginBottom:'5px'}}>Data Insights</h3>
                                        <p style={{marginTop:'0'}}>Choose from thousands of study programs across the world.
                                            .</p>
                                    </div>
                                </div>
                                <div>
                                    <KeyboardDoubleArrowUpTwoToneIcon style={{ fontSize: "60px", color: "#76d4f9" }} />
                                    <h3 style={{marginBottom:'5px'}}>Decades of expertise</h3>
                                    <p style={{marginTop:'0'}}>Advisors provide 1 on 1 support at any step of the journey..</p>
                                </div>
                            </div>
                        </div>
                        <div className='right-side'>

                            <img src="https://uni-app.com/wp-content/uploads/2022/02/uniapp-laptop-dashboard.png" alt="image not found" />
                        </div>
                    </div>
                </Container>
            </div>
        </>


    );


}

export default UniAppPlatform;