import React, { useState, useEffect } from 'react';
import Container from "@mui/material/Container";
import './index.css'
import LeftSide from '../MastersDegree/component/LeftSide';
import NoTItleContent from './NoTItleContent';

const NoTitle = () => {
    return (
        <div className='MastersDegreeBody'>
        <Container maxWidth="lg">
            <div className='childMastersDegreeBody'>
                <div>
                    <NoTItleContent/>
                </div>
                <div>
                    <LeftSide />
                </div>
            </div>
        </Container>
    </div>
    );
};

export default NoTitle;
