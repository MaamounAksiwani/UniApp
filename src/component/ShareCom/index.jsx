import React from 'react';
import './index.css';
import { Container } from '@mui/material';

const ShareCom = ({ flag, text, image1, image2, btnText, subTitle }) => {
    return (
        <div className='shareComCont'>
            <Container maxWidth="lg">
                <div>
                    <img src={image1} alt="image not found" style={{ width: "100px", height: "75px", color: "red", padding: "25px" }} />
                </div>
                <div className='sideMain'>

                   {!subTitle ?  flag ? <h2> Your Complete <span className='title'> University Application </span> Guide </h2>
                   : <h2 className='headerName'>Apply for a <span className='title'> Bachelors or Masters </span>  Revealed  on UniApp</h2> : subTitle}
                

                    <h1 style={{ textAlign: 'center', color: "#333", fontSize: "36px", marginBottom: "25px" }}>{text}</h1>

                    <div className='btnStyle'>
                        <span>
                            <a> {btnText}</a>
                        </span>
                    </div>
                </div>
                <div className='rightSide'>
                    <img src={image2} alt="image not found" style={{ padding: "25px", width: "100px", height: "75px", color:'red' }} />
                </div>
            </Container >
        </div >
    );
}
export default ShareCom;