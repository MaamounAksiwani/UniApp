import React from 'react';
import './index.css';
import { TextField } from '@mui/material';

const FIlterSection = () => {
    const inputStyle = {
        backgroundColor: '#fff',
        borderRadius: '18px',
        margin: '0px 15px',
        width: "100% !important",
    };

    return (
        <>
            <div className='boxSearch'>
                <h2>Apply for a Bachelors, Masters or Postgraduate Degree</h2>
            </div>
            {/* <TextField
                className='input2'

                placeholder='What do you want to study'

                InputProps={{ style: { ...inputStyle } }}
            /> */}
            <h2>HELLo</h2>

        </>
    );
}

export default FIlterSection;