
import React from 'react';
import './PerfectDegreeSection.css';
import Container from "@mui/material/Container";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from '../../../src/until/Image/bachelor.svg'

const PerfectDegreeSection = () => {

    const data = [
        {
            id: 1,
            image: Logo,
            title: `Bachelor's Degree`,
            des: `You are planning to start your Bachelor’s degrees?`,
            btnTitle: `Search Bachelors`,
        },
        {
            id: 2,
            image: Logo,
            title: `Master's Degree`,
            des: `You are planning to start your Master’s degrees?`,
            btnTitle: `Search Masters`,
        },
        {
            id: 3,
            image: Logo,
            title: `Online Degrees`,
            des: `You are planning to start your Online degrees?`,
            btnTitle: `Search Online courses`,
        }
    ]
    return (
        <div style={{ padding: '50px 0px 0px 0px' }}>
            <Container maxWidth="lg">
                <p style={{ textAlign: 'center', fontSize: '23px', fontWeight: 300 }}>WHAT DEGREE ARE YOU LOOKING FOR?</p>
                <h1 style={{ textAlign: 'center', color: '#333', fontSize: '36px' }}>Find Your <span className='title'>Perfect Degree </span>To Study Abroad Or Online</h1>
                <div className='cardBox'>
                    {data.map((ele) => {
                        return (
                            <div className='cardC'>
                                <img src={ele.image} alt='Image not found' />
                                <h2>{ele.title}</h2>
                                <p>{ele.des}</p>
                                <div>
                                    <div className='link'>
                                        <a>{ele.btnTitle} </a>
                                        <ArrowForwardIcon />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>

        </div>
    );
}

export default PerfectDegreeSection;
