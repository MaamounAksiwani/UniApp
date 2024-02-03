import React from 'react';
import './index.css';
import { Container } from '@mui/material';

const Secrets = () => {
  return (
    <div className='Secrets-of-Studying'>
      <Container maxWidth="lg">
        <h1 className='headerName'>Secrets of <span className='title'> Studying Abroad </span>  Revealed <br /> in Articles</h1>
        <div className='flex-Card'>
          <div className='ContainerCard'>
            <img src='https://uni-app.com/wp-content/uploads/2023/03/pexels-vidal-balielo-jr-1250655-scaled-480x356.jpg' alt='image not found' />
            <div className='card-text'>
              <p>MEDICINE</p>
              <p>How to Study Medicine in Germany in English? Breaking the Language Barrier</p>
            </div>
          </div>
          <div className='ContainerCard'>
            <img src='https://uni-app.com/wp-content/uploads/2022/04/Untitled-_500-%C3%97-680-px_-_2_.webp' alt='the image not found' className='middleImage' />
          </div>

          <div className='ContainerCard'>
            <img src='https://uni-app.com/wp-content/uploads/2023/03/pexels-zakir-rushanly-11661531-scaled-480x356.jpg' alt='image not found' />
            <div className='card-text'>
              <p>MEDICINE</p>
              <p>How to Study Medicine in Germany in English? Breaking the Language Barrier</p>
            </div>
          </div>
        </div>

        <div className='flex-Card'>
          <div className='ContainerCard'>
            <img src='https://uni-app.com/wp-content/uploads/2022/04/Untitled-_500-%C3%97-680-px_-_1_-480x356.webp' alt='image not found' />
            <div className='card-text'>
              <p>MEDICINE</p>
              <p>How to Study Medicine in Germany in English? Breaking the Language Barrier</p>
            </div>
          </div>
          <div className='ContainerCard'>
          </div>

          <div className='ContainerCard'>
            <img src='https://uni-app.com/wp-content/uploads/2022/04/Untitled-_500-%C3%97-680-px_-480x356.webp' alt='image not found' />
            <div className='card-text'>
              <p>MEDICINE</p>
              <p>How to Study Medicine in Germany in English? Breaking the Language Barrier</p>
            </div>
          </div>
        </div>

        <div className='more-article'>

         <span>
          <a> More article</a>
         </span>

        </div>

      </Container>
    </div>
  );
}
export default Secrets;