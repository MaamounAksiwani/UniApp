
import React from 'react';
import Container from "@mui/material/Container";
import './index.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const AdvisoryBoard = () => {

  const cardsData = [
    {
      id: 1,
      imgSrc: 'https://images.pexels.com/photos/3777569/pexels-photo-3777569.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Simon Landsberg      ',
      Job: 'Chief Growth Officer',
    },
    {
      id: 2,
      imgSrc: 'https://images.pexels.com/photos/9623674/pexels-photo-9623674.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Fahed Jaarah',
      Job: 'CEO & Founder',
    },
    {
      id: 3,
      imgSrc: 'https://images.pexels.com/photos/3778069/pexels-photo-3778069.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Mahmud Hasan',
      Job: 'Engineering',
    },
    {
        id: 4,
        imgSrc: 'https://images.pexels.com/photos/3777569/pexels-photo-3777569.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Simon Landsberg      ',
        Job: 'Chief Growth Officer',
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
                    
                <LinkedInIcon style={{ fontSize: 20, color: 'gray' , cursor:'pointer' }}  />
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
