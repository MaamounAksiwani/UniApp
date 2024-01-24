import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import CeoImage from '../../../until/Image/ceo-uniapp.png'

const CEO = () => {
    return (
        <>
            <Container maxWidth="lg">
                <div className='mainSection'>
                    <div>
                        <img src={CeoImage} alt='image not found ' />
                    </div>

                    <div>
                        <h1>We make it a priority to support education in
                            all its forms, as agents, you can help
                            support and motivate international students while reaping the most benefits possible.
                        </h1>
                        <p> FAHED JAARAH
                        </p>
                        <span>Founder & CEO</span>
                    </div>
                </div>
            </Container >
        </>
    );
}
export default CEO;