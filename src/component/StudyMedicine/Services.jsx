import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';
const Services = () => {
    return (
        <div className='serviceContact'>
            <Container maxWidth="lg">
                <p>PREMIUM SERVICES FOR MEDICAL STUDENTS</p>
                <h1>In Easy Steps Start Your <span className='title'> Future Medical</span> Degree</h1>
                <div className='futureMedical'>
                    <div>
                        <InfoTwoToneIcon style={{ color: "#76d4f9", fontSize: '50px' }} />
                        <h3>Request info package</h3>
                        <p>
                            Create an account and access your free information package</p>
                    </div>
                    <div>
                        <SchoolTwoToneIcon style={{ color: "#76d4f9", fontSize: '50px' }} />
                        <h3>Choose University</h3>
                        <p>
                            Select your preferred destination and degree, and click Apply!</p>
                    </div>
                    <div>
                        <LightbulbTwoToneIcon style={{ color: "#76d4f9", fontSize: '50px' }} />

                        <h3>Learning Preparation</h3>
                        <p>

                            We prepare you with learning materials &amp; e-learning app
                        </p>
                    </div>
                    <div>
                        <LocalHospitalTwoToneIcon style={{ color: "#76d4f9", fontSize: '50px' }} />

                        <h3>Doctor to be</h3>
                        <p>
                            Admission procedure completed. Begin your medical studies in Europe
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Services;