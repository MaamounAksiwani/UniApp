import React, { useState } from 'react';
import './index.css';
import { Container } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Ainternational = () => {
    const [openStates, setOpenStates] = useState([false, false, false]); // Initial state for each collapse box

    const handleToggle = (index) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    const content = [
        {
            id: 0,
            title: 'Immediate Commission Payout',

            description: 'Stop waiting, Uni-App pays you 100% Commission after the student pays first tuition            '
        },
        {
            id: 1,
            title: 'Powered By Artificial Ineligence',
            point: [
            ],
            description: `Our system is built to pre-screen all applications to ensure they are complete to meet the admissions requirements`
        },
        {
            id: 2,
            title: 'Trusuful Business Relationships',
            point: [
            ],
            description: `We are your long-term partner Your success is our success`
        }
    ]
    return (
        <>
            <div className='StudentsworldwideBox'>
                <div className='Container-studentsPage'>
                    <Container maxWidth="lg">
                        <div className='studentsPage-content'>
                            <div>
                                <img src="https://uni-app.com/wp-content/uploads/2022/02/uniapp-laptop-dashboard.png" alt="mobile image not found" style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div>
                                <p style={{ fontWeight: '400' , color:"#696969" }}>SCALE YOUR BUSINESS</p>
                                <h1> The <span className='title'>360 solution</span> for international student recruitment</h1>

                                {content.map((item) => {
                                    return (
                                        <div className='collapse-box' key={item.id}>
                                            <div className='IconButton' onClick={() => handleToggle(item.id)}>
                                                <h3 onClick={() => handleToggle(item.id)}>{item.title} </h3>
                                                {openStates[item.id] ? <RemoveIcon className='iconStyle' /> : <AddIcon className='iconStyle' />}
                                            </div>
                                            <Collapse in={openStates[item.id]} className='Collapse'>
                                                {item.point && item.point.length > 0 ? (
                                                    <ul>
                                                        {item.point.map((ele, index) => (
                                                            <li key={index}>{`${ele} ${index}`}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>{item.description}</p>
                                                )}
                                            </Collapse>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}
export default Ainternational;