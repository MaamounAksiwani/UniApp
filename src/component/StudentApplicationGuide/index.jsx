import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import StudentAppGuide from './GuideToCollege';
const StudentApplicationGuide = () => {
    return (
        <div style={{padding:'100px 0px'}}>
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
        </div>
    );
}
export default StudentApplicationGuide;