import React from 'react';
import Container from "@mui/material/Container";
import './index.css'
import Header from './Header';
import Services from './Services';
import LicensedDoctor from './LicensedDoctor';
import Country from './Country';
const StudyMedicine = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <Header />
            <Services />
            <LicensedDoctor />
            <Country/>
        </div>

    );
};

export default StudyMedicine;
