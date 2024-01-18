import React from 'react';
import './index.css';
import { Container } from '@mui/material';

const EasierWithUniApp = () => {
    return (
        <div className='EasierWithUniApp'>
            <div className='Container-EasierWithUniApp'>
                <Container maxWidth="lg">
                    <div className='content'>
                        <div>
                            <h1>Its Getting Easier With <span className='title'>UniApp</span></h1>
                            <p>Download the app to manage your entire education application journey, get 1-on-1 support from our study agents to start your
                                dream at the best universities, and easily submit your applications with free support by just using the chat button.</p>
                            <div className='download'>
                                <a href="https://play.google.com/store/apps/details?id=com.neom_gmb_h.uni_app" target="_blank">
                                    <img src="https://uni-app.com/wp-content/uploads/2022/09/uniapp-play-store-button.png" alt="android not found" />
                                </a>

                                <a href="https://apps.apple.com/de/app/uniapp/id1636265816?l=en" target="_blank">

                                    <img src="https://uni-app.com/wp-content/uploads/2022/09/uniapp-app-store-button.png" alt=' apple not found' />
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src="https://uni-app.com/wp-content/uploads/2022/09/uniapp-ios-app-download-button-1.png" alt="mobile image not found" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default EasierWithUniApp;