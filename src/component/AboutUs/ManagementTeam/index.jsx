import './index.css';
import React from 'react';
import Container from "@mui/material/Container";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import tb7 from '../../../until/Image/tb7.jpg'
import tb9 from '../../../until/Image/tb9.jpg';
import tb11 from '../../../until/Image/tb11.jpg'
const ManagementTeam = () => {

  const cardsData = [
    {
      id: 1,
      imgSrc: tb7,
      title: 'Simon Landsberg      ',
      Job: 'Chief Growth Officer',
    },
    {
      id: 2,
      imgSrc: tb9,
      title: 'Fahed Jaarah',
      Job: 'CEO & Founder',
    },
    {
      id: 3,
      imgSrc: tb11,
      title: 'Yazan Alkhatib',
      Job: 'Engineering',
    },
  ];


  return (
    <body className='teamBody'>
      <Container maxWidth="lg">
        <div className='teamTitle'>
          <h5>BEHIND THE OPERATIONS </h5>
          <h1> <span className='ManagementTitle'>Management</span> <bold>Team</bold> </h1>
        </div>
        <div className="App">
          <div className="card-container">
            {cardsData.map((card) => (
              <div key={card.id} className="TeamCard">
                <div className="image-container">
                  <img src={card.imgSrc} alt={card.title} className="card-image" />
                </div>
                <div className="overlay">
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

export default ManagementTeam;
