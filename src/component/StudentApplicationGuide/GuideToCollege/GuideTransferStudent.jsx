import React from 'react';
import './index.css';
import { Container } from '@mui/material'
import Tabs from '../GuideToCollege/Tabs'
import GuideTransferStudentComponent from './GuideTransferStudentComponent';
const GuideTransferStudent = () => {
    return (
        <div style={{padding:'50px 0px'}}>
            <Container maxWidth="lg">
                <div className='mainBox'>
                    <div className='left-side'>
                        <Tabs/>
                    </div>
                    <div className='right-side' >
                        <div>
                            <GuideTransferStudentComponent/>
                
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default GuideTransferStudent;