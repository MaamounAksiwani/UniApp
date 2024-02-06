import React from 'react';
import './index.css';
import Header from "./Header"
import CarouselCard from '../SchoolScreen/component/Carousel';
import Ainternational from './Ainternational';
import CEO from './CEO';
import AllPlatForm from './AllPlatForm';
import ShareCom from '../ShareCom';


const StudyAgents = () => {
    return (
      <div> 
          <Header/>
          <Ainternational/>
          <CEO/>
          <CarouselCard/>
          <AllPlatForm/>
          <ShareCom
        mainTitle={`SCALE YOUR <span className='title'> RECRUITMENT </span> ACTIVITIES`}
        text="Become an Uni-App Recruitment partner"
        image1="https://uni-app.com/wp-content/uploads/2022/04/signs-post-light.svg"
        image2="https://uni-app.com/wp-content/uploads/2022/04/building-columns-light.svg"
        btnText="Partner with us"
        flag={true}
      />
        </div >
    );
}
export default StudyAgents;