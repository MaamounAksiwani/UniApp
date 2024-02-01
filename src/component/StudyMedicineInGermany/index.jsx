import React from 'react';
import Container from "@mui/material/Container";
import './index.css'
import LeftSide from '../MastersDegree/component/LeftSide';
import Contant from './Contant';
const StudyMedicineInGermany = () => {
    return (
        <div className='MastersDegreeBody'>
        <Container maxWidth="lg">
            <div className='childMastersDegreeBody'>
                <div>
                    <Contant/>
                </div>
                <div>
                    <LeftSide />
                </div>
            </div>
        </Container>
    </div>
    );
};

export default StudyMedicineInGermany;
