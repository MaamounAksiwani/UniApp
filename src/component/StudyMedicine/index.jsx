import React from 'react';
import Container from "@mui/material/Container";
import './index.css'
import Header from './Header';
import Services from './Services';
import LicensedDoctor from './LicensedDoctor';
import Country from './Country';
import SecondSection from './SecondSection';
import Expect from './Expect';
const StudyMedicine = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <Header />
            <Services />
            <LicensedDoctor />
            <Country />
            <SecondSection />
            <Expect />
        </div>

    );
};

export default StudyMedicine;
