import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake'
const AllPlatForm = () => {
    return (
        <>
            <div className="uniAppPlatform">
                <Container maxWidth="lg">

                    <p style={{textAlign:'center' , color:"#696969"}}>ALL IN ONE PLATFORM</p>
                    <h1 style={{textAlign:'center'}}>One <span class='title'>Solution</span> that <span class='title'> supports</span> every steps</h1>

                    <div className='main-content'>
                        <div className='left-side'>
                            <div className='first-section'>
                                <div>
                                    <div>
                                        <HandshakeIcon style={{ fontSize: "60px", color: "#76d4f9" }} />
                                        <h3 style={{marginBottom:'5px'}}>Program Finder</h3>
                                        <p style={{marginTop:'0'}}>Our AI-powered matches students with the eligible desired courses</p>
                                    </div>

                                </div>
                                <div>
                                    <HandshakeIcon style={{ fontSize: "60px", color: "#76d4f9" }} />
                                    <h3 style={{marginBottom:'5px'}}>Global Reach</h3>
                                    <p style={{marginTop:'0'}}>in MENA, Europe & Asia, receive leads who urge for higher education.</p>

                                </div>
                            </div>
                            <div className='first-section'>
                                <div>
                                    <div>
                                        <HandshakeIcon style={{ fontSize: "60px", color: "#76d4f9" }} />
                                        <h3 style={{marginBottom:'5px'}}>One application</h3>
                                        <p style={{marginTop:'0'}}>one application form to apply to multiple programs for free.
                                            .</p>
                                    </div>

                                </div>
                                <div>
                                    <HandshakeIcon style={{ fontSize: "60px", color: "#76d4f9" }} />
                                    <h3 style={{marginBottom:'5px'}}>Lead Management</h3>
                                    <p style={{marginTop:'0'}}>Uni-App allows you to track and convert leads into applicants</p>
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

export default AllPlatForm;