import React from 'react';
import './index.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container } from '@mui/material';
import CategoryImage1 from '../../../src/until/Image/PNG/uniapp student.png';
import CategoryImage2 from '../../../src/until/Image/PNG/uniapp - study agents.png';
import CategoryImage3 from '../../../src/until/Image/PNG/uniapp - school partners.png';
import { useNavigate } from 'react-router';


const Platform = () => {

    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            category: `Students`,
            des: 'We ensure that international students have access to top colleges worldwide by bringing university programs to students for them to discover, compare, and apply to',
            image: CategoryImage1
        },
        {
            id: 2,
            category: `Study Agents`,
            des: 'UniApp is your long-term partner -- our goal is to see you succeed and improve your recruit potential -- together we prioritize international education.',
            image: CategoryImage2
        },
        {

            id: 3,
            category: `Partner Schools`,
            des: `Broaden your worldwide reach You'll get access to thousands of approved and well-trained recruitment partners. Scale and diversify your school`,
            image: CategoryImage3
        }
    ]

    const pageName = (name) => {
        const pageMappings = {
            'Students': '/students/',
            'Study Agents': '/study-agents/',
            'default': '/schools/'
        };
    
        const pagePath = pageMappings[name] || pageMappings['default'];
        navigate(pagePath);
    };
    return (
        <div style={{ padding: '50px 0px' }}>
            <Container maxWidth="lg">
                <h1 className='main-title'>A Platform Built For International Education</h1>
                <div className='cardBox'>
                    {data.map((ele) => (
                        <div className='card' key={ele.id} onClick={() => { pageName(ele.category) }}>
                            <img className='img1' src={ele.image} alt='Image not Found' />
                            <h2>{ele.category}</h2>
                            <p>{ele.des}</p>
                            <div>
                                <div className='link'>
                                    <span>Start here </span>
                                    <ArrowForwardIcon style={{ fontSize: '18px', marginLeft: '10px' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Platform;