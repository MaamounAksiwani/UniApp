import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import Pages from './Pages';
const PrivacyAndTerms = () => {
    return (
        <div style={{ padding: '50px 0px' }}>
            <Container maxWidth="lg">
                <div className='mainBox'>
                    <div className='left-side'>
                        <Pages />
                    </div>
                    <div className='right-side' >
                        <div>
                            PrivacyAndTerms
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default PrivacyAndTerms;