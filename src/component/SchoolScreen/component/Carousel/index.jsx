import React from 'react';
import './index.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import img1 from '../../../../until/Image/CTOPIC/ARDEN.jpeg'
import img2 from '../../../../until/Image/CTOPIC/BSBI.jpeg'
import img3 from '../../../../until/Image/CTOPIC/EU-BS.jpeg'

import img4 from '../../../../until/Image/CTOPIC/FOM.jpeg'
import img5 from '../../../../until/Image/CTOPIC/SIU.jpeg'
import img6 from '../../../../until/Image/CTOPIC/SRH.jpeg'

import img7 from '../../../../until/Image/CTOPIC/b.jpeg'
import img8 from '../../../../until/Image/CTOPIC/c.jpeg'

import img9 from '../../../../until/Image/CTOPIC/d.jpeg'

import img10 from '../../../../until/Image/CTOPIC/e.jpeg'

import img11 from '../../../../until/Image/CTOPIC/f.jpeg'

import img12 from '../../../../until/Image/CTOPIC/g.jpeg'

import img13 from '../../../../until/Image/CTOPIC/h.jpeg'

import { Container } from '@mui/material';
const CarouselCard = () => {

    const CustomArrow = ({ onClick, direction }) => (
        <div className={`custom-arrow ${direction}`} onClick={onClick}>
            {direction === 'prev' ? <KeyboardArrowLeftIcon size='large' /> : <KeyboardArrowRightIcon size='large' />}
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
                        <img src={img1} />
                    </div>
                    <div>
                    <img src={img2} />
                    </div>
                    <div>
                    <img src={img3} />
                        {/* <img src="https://uni-app.com/wp-content/uploads/2022/03/a.jpeg" /> */}
                    </div>
                    <div>
                    <img src={img4} />
                        {/* <img src="https://uni-app.com/wp-content/uploads/2022/03/SRH.jpeg" /> */}
                    </div>
                    <div>
                    <img src={img5} />
                        {/* <img src="https://uni-app.com/wp-content/uploads/2022/03/c.jpeg" /> */}
                    </div>
                    <div>
                    <img src={img6} />
                        {/* <img src="https://uni-app.com/wp-content/uploads/2022/03/e.jpeg" /> */}
                    </div>
                    <div>
                    <img src={img7} />
                        {/* <img src="https://uni-app.com/wp-content/uploads/2022/03/FOM.jpeg" /> */}
                    </div>
                    <div>
                    <img src={img8} />
                        {/* <img src="https://uni-app.com/wp-content/uploads/2022/03/b.jpeg" /> */}
                    </div>

                    <div>
                    <img src={img9} />
                        {/* <img src="https://uni-app.com/wp-content/uploads/2022/03/b.jpeg" /> */}
                    </div>

                    <div>
                    <img src={img10} />
                        {/* <img src="https://uni-app.com/wp-content/uploads/2022/03/b.jpeg" /> */}
                    </div>

                    <div>
                    <img src={img11} />
                        {/* <img src="https://uni-app.com/wp-content/uploads/2022/03/b.jpeg" /> */}
                    </div>


                    <div>
                    <img src={img12} />
                        {/* <img src="https://uni-app.com/wp-content/uploads/2022/03/b.jpeg" /> */}
                    </div>

                    <div>
                    <img src={img13} />
                        {/* <img src="https://uni-app.com/wp-content/uploads/2022/03/b.jpeg" /> */}
                    </div>
                </Slider>
            </Container>
        </div>


    );


}

export default CarouselCard;