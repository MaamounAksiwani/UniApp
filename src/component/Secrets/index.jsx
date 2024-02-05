import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import Image1 from '../../../src/until/Image/PNG/Secrets1.jpg'

import Image2 from '../../../src/until/Image/PNG/Secrets2.webp'

import Image3 from '../../../src/until/Image/PNG/Secrets3.jpg'

import Image4 from '../../../src/until/Image/PNG/Secrets4.webp'

import Image5 from '../../../src/until/Image/PNG/Secrets5.webp'


const Secrets = () => {
  return (
    <div className='Secrets-of-Studying'>
      <Container maxWidth="lg">
        <h1 className='headerName'>Secrets of <span className='title'> Studying Abroad </span>  Revealed <br /> in Articles</h1>
        <div className='flex-Card'>
          <div className='ContainerCard'>
            <img src={Image1} alt='image not found' />
            <div className='card-text'>
              <p>MEDICINE</p>
              <p>How to Study Medicine in Germany in English? Breaking the Language Barrier</p>
            </div>
          </div>
          <div className='ContainerCard'>
            <img src={Image2} alt='the image not found' className='middleImage' />
          </div>

          <div className='ContainerCard'>
            <img src={Image3} alt='image not found' />
            <div className='card-text'>
              <p>MEDICINE</p>
              <p>How to Study Medicine in Germany in English? Breaking the Language Barrier</p>
            </div>
          </div>
        </div>

        <div className='flex-Card'>
          <div className='ContainerCard'>
            <img src={Image4} alt='image not found' />
            <div className='card-text'>
              <p>MEDICINE</p>
              <p>How to Study Medicine in Germany in English? Breaking the Language Barrier</p>
            </div>
          </div>
          <div className='ContainerCard'>
          </div>

          <div className='ContainerCard'>
            <img src={Image5} alt='image not found' />
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