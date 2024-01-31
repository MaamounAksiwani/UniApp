import React from 'react';
import './Index.css'
import { Container } from '@mui/material';
import RightSide from './component/RightSide';
import LeftSide from './component/LeftSide';
const MastersDegree = () => {

    return (
        <div className='MastersDegreeBody'>
            <Container maxWidth="lg">
                <div className='childMastersDegreeBody'>
                    <div>
                        <RightSide />
                    </div>
                    <div>
                        <LeftSide />
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default MastersDegree;