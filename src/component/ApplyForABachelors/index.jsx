import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';
import './index.css';

const ApplyForABachelors = () => {
    const inputStyle = {
        backgroundColor: '#fff',
        borderRadius: '50px',
    };

    const headingStyle = {
        color: 'blue',
        fontSize: '16px',
        marginBottom: '10px',
    };

    const demoArray = [
        "Master",
        "Bachelor",
        "MBA",
        "Foundation",
        "Germany",
        "United kingdom",
        "United States",
        "France",
        "Computer Science",
        "Medicine",
        "Financial Management (FM)",
    ];

    const [selectedCategories, setSelectedCategories] = useState([]);

    const [checked , setChecked] = useState(false);

    const handleCategoryClick = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category];

        setSelectedCategories(updatedCategories);
    };

    return (
        <Container maxWidth="lg">
            <div className='box'>
                <h2>Apply for a Bachelors, Masters, or Postgraduate Degree</h2>

                <div className='inputs'>
                    {[1, 2].map((item) => (
                        <div key={item}>
                            <TextField
                                fullWidth
                                placeholder='What do you want to study'
                                id={`fullWidth${item}`}
                                InputProps={{ style: { ...inputStyle } }}
                            />
                        </div>
                    ))}
                </div>

                <h2 className='nameOfCategory' style={headingStyle}>
                    For Quick Search
                </h2>
                <div className="categories-container">
                    {demoArray.map((ele, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategoryClick(ele)}
                        >
                            <p className={`category ${selectedCategories.includes(ele) ? 'selected' : 'not-selected'}`}>
                                {ele} 
                            </p>
                        </div>
                    ))}
                </div>

                <div className='option'>
                    <span>Start </span>
                    <a href="/">Or View All Programs</a>
                </div>
            </div>
        </Container>
    );
};

export default ApplyForABachelors;
