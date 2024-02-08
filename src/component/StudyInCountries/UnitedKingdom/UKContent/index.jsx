import React, { useState } from 'react';

import { Container } from '@mui/material';
import './index.css'
import About from './About';
import Study from './Study';
import Living from './Living';
import Universities from './Universities'
import StudentVisa from './StudentVisa'
import HowToApply from './HowToApply';
import Scholarship from './Scholarship';

const GermanyContent = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const [nameComponent, setNameComponent] = useState('About');

    const handleItemClick = (item, index) => {
        setSelectedItem(index);
        setNameComponent(item)
    };

    return (
        <Container maxWidth="lg">
            <div className='ContentCountries'>
                <div className='feat-name'>
                    <ul>
                        {['About', 'Study', 'Living', 'Universities', 'Student Visa', 'How to Apply', 'Scholarship'].map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleItemClick(item, index)}
                                className={index === selectedItem ? 'selected' : ''}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>


                <div className='feat'>

                {nameComponent === "About" && <About />}
                {nameComponent === 'Study' && <Study/>}
                {nameComponent === 'Living' && <Living/>}
                {nameComponent === 'Universities' && <Universities/>}
                {nameComponent === 'Student Visa' && <StudentVisa/>}
                {nameComponent === 'How to Apply' && <HowToApply/>}
                {nameComponent === 'Scholarship' && <Scholarship/>}

                </div>

            </div>
        </Container>

    );
}
export default GermanyContent;