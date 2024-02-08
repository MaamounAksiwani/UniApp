import React from 'react';
import Container from "@mui/material/Container";
import './index.css';
import GermanyContent from './GermanyContent/index';

import img1 from '../../../until/Image/PIC/Heidelberg.jpg';
import img2 from '../../../until/Image/PIC/Munich.jpg';
import DestinationsAbroad from '../DestinationsAbroad';

const MedicalUniversity = ({ image, cityName, location, index }) => (
  <div className="imageContainer" key={index}>
    {/* <div className='full-overlay'></div> */}
    <img src={image} alt={`City ${index + 1}`} />
    <div className='full-overlay'></div>
    <div className="overlays">
      <h3>{cityName}</h3>
      <h4>{location}</h4>
    </div>
  </div>
);

const Germany = () => {
  const data = [
    {
      image: img1,
      cityName: "University of Munich",
      location: 'Munich, Germany'
    },
    {
      image: img2,
      cityName: "Heidelberg University",
      location: 'Heidelberg, Germany'
    }
  ];

  return (
    <>
      <div className="headerCity">
        <Container maxWidth="lg">
          <div>
            <h1>Study Medicine in Germany</h1>
          </div>
        </Container>
      </div>
      <Container maxWidth="lg">
        <div className='contactCity'>
          <h2>Medical Universities in Germany</h2>
        </div>
        <div className='cityImage'>
          {data.map((ele, index) => (
            <MedicalUniversity key={index} {...ele} index={index} />
          ))}
        </div>
      </Container>
      <GermanyContent />
      <DestinationsAbroad/>
    </>
  );
};

export default Germany;
