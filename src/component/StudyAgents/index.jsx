import React, { useState } from 'react';
import './index.css';
import { Container } from '@mui/material';
import Header from "./Header"
import CarouselCard from '../SchoolScreen/component/Carousel';


const StudyAgents = () => {



    return (
        <div className='shareComCont'>
          <Header/>
          <CarouselCard/>
        </div >
    );
}
export default StudyAgents;