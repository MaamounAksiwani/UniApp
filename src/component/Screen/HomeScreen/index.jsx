import React from 'react';
import ApplyForABachelors from '../../ApplyForABachelors';
import EasierWithUniApp from "../../EasierWithUniApp";
import Header from "../../Header/Header";
import MakeSureSection from "../../MakeSureSection";
import PerfectDegreeSection from "../../PerfectDegreeSection";
import Platform from "../../Platform";
import './index.css';
import Secrets from "../../Secrets";
import ShareCom from "../../ShareCom";
import StudyDestinations from "../../StudyDestinations";
// import divider from '../../../../src/until/Image/PNG/uniapp divider white.png'
const HomeScreen = () => {
  return (
    <>
      <Header />
      <ApplyForABachelors />
      <Platform />
      <EasierWithUniApp />
      <MakeSureSection />
      <Secrets />
      <PerfectDegreeSection />
      <ShareCom
        mainTitle={`Apply for a <span className='title'> Bachelors or Masters </span>  Revealed  on UniApp`}
        text="Discover and Apply to the Best Schools"
        image1="https://uni-app.com/wp-content/uploads/2022/04/diploma-light.svg"
        image2="https://uni-app.com/wp-content/uploads/2022/04/graduation-cap-light.svg"
        btnText="Start Your Application"
        flag={false}
      />
      <StudyDestinations />
      <ShareCom
        mainTitle={`Your Complete <span className='title'> University Application </span> Guide`}
        text="You can be your own guiding star with our help!"
        image1="https://uni-app.com/wp-content/uploads/2022/04/signs-post-light.svg"
        image2="https://uni-app.com/wp-content/uploads/2022/04/building-columns-light.svg"
        btnText="Student Application Guide"
        flag={true}
      />

    </>


  );
}

export default HomeScreen;