import React, { useState } from 'react';
import './index.css';
import { Container } from '@mui/material';

const ShareCom = ({ flag, text, image1, image2, btnText, subTitle }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handelClick = ()=>{
        if(btnText === 'Student Application Guide'){
            window.location.href = 'https://www.facebook.com/uniapp.official';
        }else if(btnText === 'Start Your Application'){
            window.location.href = 'https://my.uni-app.com/sign-in?redirectURL=%2Fhome';
        }
    }
    return (
        <div className='shareComCont'>
            <Container maxWidth="lg">
                <div className={`hover-text ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img src={image1} alt="image not found" />
                </div>
                <div className='sideMain'>

                    {!subTitle ? flag ?
                     <h2> Your Complete <span className='title'> University Application </span> Guide </h2> 
                     : <h2 className='headerName'>Apply for a <span className='title'> Bachelors or Masters </span>  Revealed  on UniApp</h2> 
                     : subTitle}
                    <h1 className='titleHeader'>{text}</h1>
                    <div className='btnStyle'>
                        <span onClick={()=>{handelClick()}}>
                         {btnText}
                        </span>
                    </div>
                </div>
                <div className={` rightSide hover-text ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img src={image2} alt="image not found" />
                </div>
            </Container >
        </div >
    );
}
export default ShareCom;