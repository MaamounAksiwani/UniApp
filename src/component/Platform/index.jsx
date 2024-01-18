import React from 'react';
import './index.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container } from '@mui/material';

const Platform = () => {
    return (
        <div style={{ margin: '50px 0px' }}>
            <Container maxWidth="lg">
                <h1 className='main-title'>A Platform Built For International Education</h1>
                <div className='cardBox'>
                    <div className='card'>
                        <img className='img1' src='https://images.pexels.com/photos/18489099/pexels-photo-18489099/free-photo-of-man-in-white-shirt-with-book-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='Image 1' />
                        <h2>Studebts</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        <div>
                            <div className='link'>
                                <a>Start here </a>
                                <ArrowForwardIcon />
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='img2' src='https://images.pexels.com/photos/18489099/pexels-photo-18489099/free-photo-of-man-in-white-shirt-with-book-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='Image 2' />
                        <h2>Studay Agents</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        <div className='link'>
                            <a>Start here </a>
                            <ArrowForwardIcon />
                        </div>
                    </div>
                    <div className='card'>
                        <img className='img3' src='https://images.pexels.com/photos/18489099/pexels-photo-18489099/free-photo-of-man-in-white-shirt-with-book-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='Image 3' />
                        <h2>Partner Schools</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        <div className='link'>
                            <a>Start here </a>
                            <ArrowForwardIcon />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Platform;