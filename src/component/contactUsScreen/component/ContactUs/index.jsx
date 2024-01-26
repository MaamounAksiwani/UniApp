
// contact-us

import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const ContactUs = () => {
    return (
        <div style={{padding:'100px 0px'}}>

            <Container maxWidth="lg">
                <h1 style={{ color: '#333', fontSize: '30px', textAlign: 'center' , marginBottom:'50px' }}>For more information about Uni-App, get in <br /> touch via</h1>

                <div className='contactUsOption'>

                    <div className='contactBox'>
                        <div>
                            <LocationOnIcon style={{ color: '#76d4f9', fontSize: '30px', marginTop: '12px' , marginRight:'10px' }} />
                        </div>
                        <div className='contactText'>
                            <h1 style={{ marginBottom: '0' }}>Address</h1>
                            <p style={{ marginTop: '10px' }}>Neue Mainzer Str. 46, 60311 Frankfurt am Main, <br/> Germany</p>
                        </div>

                    </div>
                    <div className='contactBox'>
                        <div>
                            <PhoneEnabledIcon style={{ color: '#76d4f9', fontSize: '30px', marginTop: '12px' , marginRight:'10px'  }} />
                        </div>
                        <div className='contactText'>
                            <h1 style={{ marginBottom: '0' }}>Contact</h1>
                            <p style={{ marginTop: '10px' }}>Call: +49 176 45827626</p>
                            <p style={{ marginTop: '0' }}>Mail: info@uni-app.com</p>
                        </div>

                    </div>
                    <div className='contactBox'>
                        <div>
                            <QueryBuilderIcon style={{ color: '#76d4f9', fontSize: '30px', marginTop: '12px', marginRight:'10px'  }} />
                        </div>
                        <div className='contactText'>
                            <h1 style={{ marginBottom: '0' }}>Hour of operation</h1>
                            <p style={{ marginTop: '10px' }}>    Monday - Friday: 09:00 - 17:00</p>
                            <p style={{ marginTop: '0' }}>    Sunday & Saturday: Closed</p>
                        </div>

                    </div>
                </div>

                
            </Container>

        </div>
    );
}

export default ContactUs;