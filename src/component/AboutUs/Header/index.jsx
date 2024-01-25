import React from 'react';
import { Container } from '@mui/material';
import './index.css';

const Header = () => {
    // <Container maxWidth="lg">
    // <h1>Header</h1>
    // </Container>
    return (
        <>
       <div className="parentDiv">
      {/* Background Image */}
      <div className="backgroundImagee"></div>
      
      {/* Overlay */}
      <div className="overlayy"></div>

      {/* Text in the center */}
      <div className="centerText">
        <p>We're UniApp, We Empower Education Seekers Regardless Of Where They Come From Or Their Educational Background</p>
      </div>
    </div>
        </>
    );
};

export default Header;
