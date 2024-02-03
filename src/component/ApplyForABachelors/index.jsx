import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';
import './index.css';
import CheckIcon from '@mui/icons-material/Check';


const ApplyForABachelors = () => {
    const inputStyle = {
        backgroundColor: '#fff',
        borderRadius: '18px',
        margin: '0px 15px',
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
        "Arts, Design & Architecture",
        'Business & Management'
    ];

    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryClick = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category];

        setSelectedCategories(updatedCategories);
    };


    console.log('selectedCategories', selectedCategories);

    return (
        <body className='bodyApplyForABachelors'>

            <Container maxWidth="lg">
                <div className='box'>
                    <h2>Apply for a Bachelors, Masters, or Postgraduate Degree</h2>

                    <div className='inputs'>

                        <TextField
                            className='input1'
                            placeholder='What do you want to study'
                            InputProps={{ style: { ...inputStyle } }}
                        />
                        <TextField
                            className='input2'

                            placeholder='What do you want to study'

                            InputProps={{ style: { ...inputStyle } }}
                        />
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
                                    <span>{ele}</span>
                                    <span>{selectedCategories.includes(ele) && <CheckIcon style={{ marginLeft: '5px', fontWeight: 'bold', fontSize: '15px' }} />}</span>
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='optionn'>
                        <span onClick={() => {
                            window.location.href = `https://uni-app.com/search`
                        }}>Start </span>
                        <span onClick={() => {
                            window.location.href = `https://uni-app.com/search`
                        }}>Or View All Programs</span>

                        {/* <a href="/"></a> */}
                    </div>
                </div>
            </Container>
        </body>
    );
};

export default ApplyForABachelors;
