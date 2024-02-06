import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import Header from './component/Header';
import Studentsworldwide from './component/Studentsworldwide';
import CarouselCard from "./component/Carousel"
import UniAppPlatform from './component/UniAppPlatform';
import ShareCom from '../ShareCom';

const SchoolScreen = () => {
    return (
      <> 
        <Header/>
        <Studentsworldwide/>
        <CarouselCard/>
        <UniAppPlatform/>
        <ShareCom
        mainTitle={`Your Complete <span className='title'> Student Application </span> Management`}
        text="A 360 Digital Solution Used By Education Institutions Worldwide"
        image1="https://uni-app.com/wp-content/uploads/2022/03/screen-users-light.svg"
        image2="https://uni-app.com/wp-content/uploads/2022/04/building-columns-light.svg"
        btnText="Partner with us"
        flag={true}
      />
        </>
    );
}

export default SchoolScreen;