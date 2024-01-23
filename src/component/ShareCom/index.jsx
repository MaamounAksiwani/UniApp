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
    return (
        <div className='shareComCont'>
            <Container maxWidth="lg">
                <div className={`hover-text ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img src={image1} alt="image not found" />
                </div>
                <div className='sideMain'>

                    {!subTitle ? flag ? <h2> Your Complete <span className='title'> University Application </span> Guide </h2>
                        : <h2 className='headerName'>Apply for a <span className='title'> Bachelors or Masters </span>  Revealed  on UniApp</h2> : subTitle}


                    <h1 style={{ textAlign: 'center', color: "#333", fontSize: "36px", marginBottom: "25px" }}>{text}</h1>

                    <div className='btnStyle'>
                        <span>
                            <a> {btnText}</a>
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