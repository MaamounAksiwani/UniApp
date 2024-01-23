import React from 'react';
import './index.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { Container } from '@mui/material';
const CarouselCard = () => {

    const CustomArrow = ({ onClick, direction }) => (
        <div className={`custom-arrow ${direction}`} onClick={onClick}>
            {direction === 'prev' ? <KeyboardArrowLeftIcon size='large'/> : <KeyboardArrowRightIcon size='large'/>}
        </div>
    );


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
      <div className='customCarousel'>
          <Container maxWidth="lg">
            <Slider {...settings}>
                <div>
                    <img src='https://uni-app.com/wp-content/uploads/2022/03/EU-BS.jpeg' />
                </div>
                <div>
                    <img src='https://uni-app.com/wp-content/uploads/2022/03/h.jpeg' />
                </div>
                <div>
                    <img src="https://uni-app.com/wp-content/uploads/2022/03/a.jpeg" />
                </div>
                <div>
                    <img src="https://uni-app.com/wp-content/uploads/2022/03/SRH.jpeg" />
                </div>
                <div>
                    <img src="https://uni-app.com/wp-content/uploads/2022/03/c.jpeg" />
                </div>
                <div>
                    <img src="https://uni-app.com/wp-content/uploads/2022/03/e.jpeg" />
                </div>
                <div>
                    <img src="https://uni-app.com/wp-content/uploads/2022/03/FOM.jpeg" />
                </div>
                <div>
                    <img src="https://uni-app.com/wp-content/uploads/2022/03/b.jpeg" />
                </div>

            </Slider>
        </Container>
      </div>


    );


}

export default CarouselCard;