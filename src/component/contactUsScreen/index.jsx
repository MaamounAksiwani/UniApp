import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import ContactUs from './component/ContactUs'
import Map from './component/Map'


const contactUsScreen = () => {
    return (
        <div style={{ padding: '50px 0px' }}>
            <Container maxWidth="lg">
                <ContactUs />
                <Map/>
        
            </Container>

        </div>
    );
}

export default contactUsScreen;