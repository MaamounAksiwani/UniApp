import React, { useState, useEffect } from 'react';
import './index.css';
import { Link, NavLink } from 'react-router-dom'

import { Container } from '@mui/material';
const Header = () => {
    const [TeamCount, setTeamCount] = useState(0);
    const [RateCount, setRateCount] = useState(0);
    const [StudentCount, setStudentCount] = useState(0);
    const [AgentsCount, setAgentsCount] = useState(0);



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

    const Agents = () => {
        if (AgentsCount < 1000) {
            setTimeout(() => {
                setAgentsCount(AgentsCount + 10);
            }, 10);

        }
    }

    useEffect(() => {
        increaseCount();
        Rate();
        Agents();
        Student();
    })


    return (
        <>
            <div style={{ padding: '100px 0'  , backgroundColor:'#f8f8f8'}}>
                <div className='Container-studentsPage'>
                    <Container maxWidth="lg">
                        <div className='studentsPage-content'>
                            <div>
                                <p style={{ fontWeight: '500' }}>PARTNERSHIP WITH  <span className='title'>UNIAPP</span> </p>
                                <h1> Scale-Up And <br /> <span className='title'>Diversify</span> Your School </h1>
                                <p>UniApp is your long-term partner to increase your global reach.
                                    Get access to thousands of vetted and well trained recruitment partners
                                    .</p>
                                <div className='btnStyle'>
                                    <span>
                                        <Link to='/contact-us/'> Partner With Us</Link>
                                    </span>
                                </div>
                            </div>
                            <div className='count'>
                                <div>

                                    <div style={{ padding: '5px' }}>
                                        <h1>{TeamCount}+</h1>
                                        <p> Team Members</p>
                                    </div>

                                    <div style={{ padding: '5px' }}>
                                        <h1>{StudentCount}<span>+</span></h1>
                                        <p> Student's nationality </p>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ padding: '5px' }}>
                                        <h1>{RateCount}+</h1>
                                        <p> satisfaction rate</p>
                                    </div>

                                    <div style={{ padding: '5px' }}>
                                        <h1>{AgentsCount}+</h1>
                                        <p>vetted agents </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}
export default Header;