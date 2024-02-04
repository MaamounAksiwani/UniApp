import React, { useState } from 'react';
import './index.css';
import img from '../../../src/until/Image/mssp.jpg'
import { Container } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const LicensedDoctor = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <>
            <div>
                <div className='Container-studentsPage'>
                    <Container maxWidth="lg">
                        <div className='studentsPage-content'>
                            <div>
                                <p style={{ color: '#696969', fontWeight: '500', fontSize: '14px' }}>BECOME A DOCTOR</p>
                                <h1> with   <span className='title'>Uni-App </span> become a licensed doctor</h1>
                                <p>
                                    We entirely take over and organize your applications to various colleges with our quality and broad variety of services.
                                    As a result, you will save significant time that you can devote exclusively to preparing for your future medical education
                                    in Europe. In addition, an e-learning platform is provided to help you prepare for your medical studies. In addition, if you
                                    have any questions about biology or chemistry, the learning coach will assist you through WhatsApp or video call. We will also
                                    help you with your academics.
                                </p>

                                <div className='notSurePart' onClick={()=>{  window.location.href = `https://uni-app.com/search`}}>
                                    <p style={{ color: '#696969' }}>Not Sure?
                                    </p>

                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p> Get In Touch</p>
                                        <ArrowRightAltIcon style={{ color: '#76d4f9' }} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={`hover-text ${isHovered ? 'hovered' : ''}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave} style={{
                                        margin: '25px 0px',
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}>
                                    <img src='https://uni-app.com/wp-content/uploads/2022/04/plus-light.svg' className='imageHeader' alt='not found' />
                                    <img
                                        src="https://uni-app.com/wp-content/uploads/2022/04/feather-pointed-light.svg"
                                        className='imageHeader'
                                        alt="not found"
                                    />
                                </div>
                                <img src={img} alt="mobile image not found" className='mainImage' />

                                <div className={`hover-text ${isHovered ? 'hovered' : ''}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave} style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                    <img src='https://uni-app.com/wp-content/uploads/2022/04/book-open-light.svg' className='imageHeader' alt='not found' />
                                    <img
                                        src="https://uni-app.com/wp-content/uploads/2022/04/diamond-light.svg"
                                        className='imageHeader'
                                        alt="not found"
                                    />
                                </div>

                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}
export default LicensedDoctor;