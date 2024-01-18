import React, { useState } from 'react';
import './index.css';
import { Container } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Studentsworldwide = () => {
    const [openStates, setOpenStates] = useState([false, false, false]); // Initial state for each collapse box

    const handleToggle = (index) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    const content = [
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 2,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        }
    ]
    return (
        <>
            <div className='StudentsworldwideBox'>
                <div className='Container-studentsPage'>
                    <Container maxWidth="lg">
                        <div className='studentsPage-content'>
                            <div>
                                <img src="https://uni-app.com/wp-content/uploads/2022/02/uniapp-laptop-dashboard.png" alt="mobile image not found" className='mainImage' />
                            </div>
                            <div>
                                <p style={{ fontWeight: '500' }}>AINTERNATIONAL REACH</p>
                                <h1> Be Seen by <span className='title'>Students</span>  worldwide</h1>
                              
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
export default Studentsworldwide;