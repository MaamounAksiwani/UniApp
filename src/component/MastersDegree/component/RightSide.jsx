import React from 'react';
import mainImg from '../../../until/Image/tourism-and-hospitality-management-masters.png'
import './index.css';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TextOne from './TextOne';
import img from '../../../until/Image/cef6ad55dd285872cecd60dd8488e0b6.jpeg'

const RightSide = () => {

    return (
        <div className='masterBody'>
            <img src={mainImg} alt='image not found' className='mainImg' />
            <h4 className='masterTitle'>MASTERS DEGREE</h4>
            <h1>Why study a master’s degree in tourism and hospitality management in 2023</h1>

            <div className='nameWithDate'>
                <div className='rightSideContact'>
                    <img src={img} alt='not found' />
                    <p>Leila El Bishry</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <DateRangeIcon style={{ marginTop: '15px', marginRight: '5px', fontSize: '18px' }} />
                    <p>July27,2022</p>
                </div>
            </div>

            <TextOne />

        </div>
    );
}

export default RightSide;