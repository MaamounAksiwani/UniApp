import React from 'react';
import './index.css';
import Header from './Header'
import FirstSeciton from './FirstSeciton';
import SecondSection from './SecondSection';
import ManagementTeam from './ManagementTeam';
import AdvisoryBoard from './FirstSeciton/AdvisoryBoard';


const AboutUs = () => {

    return (
        <div className='about-us'>  
            <Header />
            <FirstSeciton/>
            <SecondSection/>
            <ManagementTeam/>
            <AdvisoryBoard/>
        </div>
    );
};

export default AboutUs;
