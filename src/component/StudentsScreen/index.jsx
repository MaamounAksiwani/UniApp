import React from 'react';
import './index.css';
import Header from './component/Header';
import ShareCom from '../ShareCom';
import UniWork from './component/UniWork';
import UniversityApplication from './component/UniversityApplication';
import StudyDestinations from '../StudyDestinations';
import PerfectDegreeSection from '../PerfectDegreeSection';

const StudentsScreen = () => {
  return (
    <div style={{padding:'100px 0px' }}> 
        <Header/>
        <ShareCom
        mainTitle={` Wide Selection of <span className='title'> International Universities </span> And Degrees`}
        text="Access to top colleges throughout the world compare, and apply to"
        image1="https://uni-app.com/wp-content/uploads/2022/03/globe-stand-light-1.svg"
        image2="https://uni-app.com/wp-content/uploads/2022/04/building-columns-light.svg"
        btnText="Start Your Uni-Application"
        flag={false}
      />
      <UniWork/>
      <UniversityApplication/>
      <StudyDestinations/>
      <ShareCom
        text="We’re always here for you"
        image1="https://uni-app.com/wp-content/uploads/2022/03/messages-question-light-1.svg"
        image2="https://uni-app.com/wp-content/uploads/2022/03/user-headset-light-3.svg"
        btnText="Contact Our Support Team"
        flag={false}
        subTitle='HAVE A QUESTION?'
      />
      <PerfectDegreeSection/>
    </div>
  );
}
export default StudentsScreen;