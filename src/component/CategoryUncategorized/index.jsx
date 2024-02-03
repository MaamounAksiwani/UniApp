import React, { useState, useEffect } from 'react';
import Container from "@mui/material/Container";
import './index.css'
import LeftSide from '../MastersDegree/component/LeftSide';
import Card from './Card'
const CategoryUncategorized = () => {
    return (
        <div className='MastersDegreeBody'>
        <Container maxWidth="lg">
            <div className='childMastersDegreeBody'>
                <div>
                    <Card/>
                </div>
                <div>
                    <LeftSide />
                </div>
            </div>
        </Container>
    </div>
    );
};

export default CategoryUncategorized;