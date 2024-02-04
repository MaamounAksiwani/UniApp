import React from 'react';
import './index.css';
import { Container } from '@mui/material'
import Tabs from '../GuideToCollege/Tabs'
import GuideFirstTimeComponent from './GuideFirstTimeComponent';

const GuideFirstTimeStudents = () => {
    return (
        <div style={{padding:'100px 0px'}}>
            <Container maxWidth="lg">
                <div className='mainBox'>
                    <div className='left-side'>
                        <Tabs/>
                    </div>
                    <div className='right-side' >
                        <div>
                            <GuideFirstTimeComponent/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default GuideFirstTimeStudents;