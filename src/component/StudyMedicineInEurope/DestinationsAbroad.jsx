import React from 'react';
import './index.css'
import Container from "@mui/material/Container";
import img1 from '../../until/Image/PIC/germany.jpg'
import img2 from '../../until/Image/PIC/latvia-potrait.jpg'
import img3 from '../../until/Image/PIC/romania-potrait.jpg'
import img4 from '../../until/Image/PIC/Slovakiap.jpg'
import { useNavigate } from 'react-router';

const DestinationsAbroad = () => {
    const navigate = useNavigate();
    return (
        <div className='DestinationsAbroad'>

            <Container maxWidth="lg">
                <h2>Medical Study Destinations Abroad</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '25px 0px' }}>
                    <img src={img1} alt=''/>
                    <img src={img2} alt=''/>
                    <img src={img3} alt='' />
                    <img src={img4}  alt=''/>
                </div>

                <button onClick={() => { navigate('/study-medicine-in-europe/') }}>View All</button>
            </Container>


        </div>
    );
};

export default DestinationsAbroad;
