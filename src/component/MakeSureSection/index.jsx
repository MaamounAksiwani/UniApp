import React, { useState, useEffect } from 'react';
import './index.css';
import { Container } from '@mui/material';
// handshake-duotone 2
import iconFeat from '../../../src/until/Image/SVG/handshake-duotone 2.svg'
import iconFeat2 from '../../../src/until/Image/SVG/shield-duotone 2.svg'
import iconFeat3 from '../../../src/until/Image/SVG/users-duotone 2.svg'
import DevicesIcon from '@mui/icons-material/Devices';
import laptop from '../../until/Image/PNG/uniapp-laptop-dashboard.png'
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';




import HeadsetMicTwoToneIcon from '@mui/icons-material/HeadsetMicTwoTone';
import DevicesTwoToneIcon from '@mui/icons-material/DevicesTwoTone';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';


const MakeSureSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [TeamCount, setTeamCount] = useState(0);
    const [RateCount, setRateCount] = useState(0);
    const [StudentCount, setStudentCount] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 1600);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);






    const increaseCount = () => {
        if (TeamCount < 100) {
            setTimeout(() => {
                setTeamCount(TeamCount + 1);
            }, 10);
        }
    };

    const Rate = () => {
        if (RateCount < 500) {
            setTimeout(() => {
                setRateCount(RateCount + 4);
            }, 10);

        }
    }

    const Student = () => {
        if (StudentCount < 250) {
            setTimeout(() => {
                setStudentCount(StudentCount + 2);
            }, 10);

        }
    }


    if (isScrolled) {
        increaseCount();
        Rate();
        Student();
    }
    return (
        <>
            <div className="MakeSureSection-container">
                <Container maxWidth="lg">
                    <h1 className='MakeSureSection-title'>We Make Sure Students Gain Admission to the  Best  International Colleges and Universities</h1>
                    <div className='count'>
                        <div>
                            {isScrolled}
                            <h1>{TeamCount}+</h1>
                            <p>programs</p>
                        </div>
                        <div>
                            <h1>{RateCount}+</h1>
                            <p>study agents</p>
                        </div>
                        <div>
                            <h1>{StudentCount}+</h1>
                            <p>countries</p>
                        </div>
                    </div>

                    <div className='main-content'>
                        <div className='left-side'>
                            <div className='first-section'>
                                <div>
                                    <div>
                                        <HeadsetMicTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                                        <h3 style={{ marginBottom: '5px', color: "#333" }}>Admission Counselling</h3>
                                        <p style={{ marginTop: '0' }}>From the comfort of your home, schedule a meeting with an expert and receive a free consultation.</p>
                                    </div>

                                </div>
                                <div>
                                    <DevicesTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                                    <h3 style={{ marginBottom: '5px', color: "#333" }}>Smart Application</h3>
                                    <p style={{ marginTop: '0' }}>With your profile, you will be able to apply for multiple programs with one click.</p>

                                </div>
                            </div>
                            <div className='first-section'>
                                <div>
                                    <div>

                                        <HandshakeTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                                        <h3 style={{ marginBottom: '5px', color: "#333" }}>Partner Schools</h3>
                                        <p style={{ marginTop: '0' }}>Choose from thousands of study programs across the world.
                                            .</p>
                                    </div>
                                </div>
                                <div>

                                    <QuestionAnswerTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                                    <h3 style={{ marginBottom: '5px', color: "#333" }}>Continuous Support</h3>
                                    <p style={{ marginTop: '0' }}>Advisors provide 1 on 1 support at any step of the journey..</p>
                                </div>
                            </div>
                        </div>
                        <div className='right-side'>
                            <img src={laptop} alt="image not found" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default MakeSureSection;