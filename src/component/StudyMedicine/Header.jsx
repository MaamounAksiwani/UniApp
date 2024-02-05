import React from 'react';
import './index.css';
import mmp from "../../../src/until/Image/mmp.jpg"
import { Container } from '@mui/material';
const Header = () => {
    return (
        <>
            <div className='studentsPage headerMedicine'>
                <div>
                    <Container maxWidth="lg">
                        <div className='studentsPage-content'>
                            <div>
                                <h1> Study  <span className='title'>Medicine </span> in <br /> Europe</h1>
                                <p>Study medicine in Europe in English. Get 100% guaranteed entry into Europe’s Best Medical Universities with our premium and extensive
                                    range of services, we completely take over and organise your applications at various universities
                                </p>
                                <div className='btnStyle' onClick={() => { window.location.href = 'https://uni-app.com/search'; }}>
                                    <span>
                                        Discover Medicine Degrees
                                    </span>
                                </div>
                            </div>
                            <div>

                                <img src={mmp} alt="mobile image not found" className='mainImage' />


                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}
export default Header;