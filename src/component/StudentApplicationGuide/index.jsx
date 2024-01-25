import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import StudentAppGuide from './GuideToCollege';
const StudentApplicationGuide = () => {
    return (
        <>
            <Container maxWidth="lg">
                <div className='mainBox'>
                    <div className='left-side'>
                        <div>
                            <h4> Students Application Guide</h4>
                        </div>
                        <div>
                            <h4>First-Time  Students</h4>
                        </div>
                        <div>
                            <h4>Transfer Students</h4>
                        </div>
                    </div>

                    <div className='right-side' >
                        <div>
                        <StudentAppGuide />
                        </div>
                    </div>


                </div>

            </Container>
        </>
    );
}
export default StudentApplicationGuide;