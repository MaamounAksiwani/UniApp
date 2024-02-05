import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import Tabs from './GuideToCollege/Tabs'
import StudentAppGuide from './GuideToCollege';
const StudentApplicationGuide = () => {
    return (
        <div style={{padding:'50px 0px'}}>
            <Container maxWidth="lg">
                <div className='mainBox'>
                    <div className='left-side'>
                        <Tabs/>
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