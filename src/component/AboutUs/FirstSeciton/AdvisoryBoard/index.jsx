
import React from 'react';
import Container from "@mui/material/Container";
import './index.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import tb1 from '../../../../until/Image/tb1.jpg'
import tb3 from '../../../../until/Image/tb3.jpg';
import tb5 from '../../../../until/Image/tb5.jpg';
import tb6 from '../../../../until/Image/tb6.jpg';
const AdvisoryBoard = () => {

  const cardsData = [
    {
      id: 1,
      imgSrc: tb5,
      title: 'Dr. Torsten Netzer',
      Job: 'Advisory Board',
    },
    {
      id: 2,
      imgSrc: tb3,
      title: 'Dr. Caner Aver',
      Job: 'Advisory Board',
    },
    {
      id: 3,
      imgSrc: tb1,
       title: 'Dr. Rolf van Dawen',
       Job: 'Advisory Board',
    },
    {
      id: 4,
      imgSrc: tb6,
       title: 'Dr. René Rüth',
       Job: 'Advisory Board',
    },
  ];


  return (
    <body className='AdvisoryCardBody'>
      <Container maxWidth="lg">
        <div className='teamTitle'>

          <h1> <span className='title'>Advisory</span> Board </h1>
        </div>

        <div className="App">
          <div className="card-container">
            {cardsData.map((card) => (
              <div key={card.id} className="AdvisoryCard">
                <div className="image-container">
                  <img src={card.imgSrc} alt={card.title} className="card-image" />
                </div>
                <div className="overlayAdvisoryCard">
                  <div className='hoverIcon'>

                    <LinkedInIcon style={{ fontSize: 20, color: 'gray', cursor: 'pointer' }} />
                  </div>
                </div>
                <h2>{card.title}</h2>
                <p>{card.Job}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </body>

  );
}

export default AdvisoryBoard;
