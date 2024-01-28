import './index.css';
import React from 'react';
import Container from "@mui/material/Container";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// tb7
import tb7 from '../../../until/Image/JPG/tb7.jpg'
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
