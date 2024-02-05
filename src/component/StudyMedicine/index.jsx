import React from 'react';
import Container from "@mui/material/Container";
import './index.css'
import Header from './Header';
import Services from './Services';
import LicensedDoctor from './LicensedDoctor';
import Country from './Country';
import SecondSection from './SecondSection';
import Expect from './Expect';
import ShareCom from '../../component/ShareCom'
const StudyMedicine = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <Header />
            <Services />
            <LicensedDoctor />
            <Country />
            <SecondSection />
            <Expect />
            <ShareCom
                mainTitle={`Study Medicine Not Sure?`}
                text="Our Study Advisors Are There To Answer All Sorts Of Questions"
                image1="https://uni-app.com/wp-content/uploads/2022/04/diploma-light.svg"
                image2="https://uni-app.com/wp-content/uploads/2022/04/graduation-cap-light.svg"
                btnText="Ask Your Question"
                flag={true}
            />
        </div>

    );
};

export default StudyMedicine;
