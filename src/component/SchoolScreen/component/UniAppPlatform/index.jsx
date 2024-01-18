import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake'
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
                                        <HandshakeIcon style={{ fontSize: "50px", color: "#378fb4" }} />
                                        <h4>Global Targets</h4>
                                        <p>From the comfort of your home, schedule a meeting with an expert and receive a free consultation.</p>
                                    </div>

                                </div>
                                <div>
                                    <HandshakeIcon style={{ fontSize: "50px", color: "#378fb4" }} />
                                    <h4>Pre Scanning</h4>
                                    <p>With your profile, you will be able to apply for multiple programs with one click.</p>

                                </div>
                            </div>
                            <div className='first-section'>
                                <div>
                                    <div>
                                        <HandshakeIcon style={{ fontSize: "50px", color: "#378fb4" }} />
                                        <h4>Data Insights</h4>
                                        <p>Choose from thousands of study programs across the world.
                                            .</p>
                                    </div>

                                </div>
                                <div>
                                    <HandshakeIcon style={{ fontSize: "50px", color: "#378fb4" }} />
                                    <h4>Decades of expertise</h4>
                                    <p>Advisors provide 1 on 1 support at any step of the journey..</p>
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