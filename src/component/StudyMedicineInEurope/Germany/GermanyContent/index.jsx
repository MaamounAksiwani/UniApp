import React, { useState } from 'react';

import { Container } from '@mui/material';
import './index.css'
import About from './About';
import Study from './Study';
import Universities from './Universities'
import HowToApply from './HowToApply';


const GermanyContent = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const [nameComponent, setNameComponent] = useState('About Medicine in Germany');

    const handleItemClick = (item, index) => {
        setSelectedItem(index);
        setNameComponent(item)
    };

    return (
        <Container maxWidth="lg">
            <div className='ContentCountries'>
                <div className='feat-name'>
                    <ul>
                        {['About Medicine in Germany', 'Study Medicine in Germany', 'Universities', 'How to Apply'].map((item, index) => (
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

                {nameComponent === 'About Medicine in Germany' && <About />}
                {nameComponent === 'Study Medicine in Germany' && <Study/>}
             
                {nameComponent === 'Universities' && <Universities/>}
          
                {nameComponent === 'How to Apply' && <HowToApply/>}


                </div>

            </div>
        </Container>

    );
}
export default GermanyContent;