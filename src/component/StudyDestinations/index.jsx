import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';
import germany  from '../../../src/until/Image/PNG/UDRUS-POST-18-1.svg'
import france from '../../../src/until/Image/PNG/FRANCE-19.svg';
import USA from '../../../src/until/Image/PNG/USA-20.svg'
import UK from '../../../src/until/Image/PNG/UK-21.svg'

const StudyDestinations = () => {
    const navigate = useNavigate();
    const data = [
        {
            id: 1,
            cityName: "Germany",
            title: "German universities are among the most important universities around the world, and the most interested in qualifying students for the labor market",
            url: "path",
            image: germany
        },
        {
            id: 2,
            cityName: "France",
            title: "France includes public universities for international students. Also, it has 27 French universities that are ranked among the top 500 universities",
            url: "path",
            image:france
        }
        ,
        {
            id: 3,
            cityName: "USA",
            title: "USA is one country that has the largest international student population in the world. With more than 5% international student population in the mix",
            url: "path",
            image: USA
        },
        {
            id: 4,
            cityName: "United Kingdom",
            title: "UK is the favourite international destination for students who wish to make their academic careers shine. Being home to prestigious universities",
            url: "path",
            image: UK
        }
    ]


    const handleClick = (path) => {
        if(path === 'Germany'){
            navigate('/study-destinations/study-in-germany/');
        }
      };


      const GoPageStudyDestinations = ()=>{
        navigate('/study-destinations/');
      }

    return (
        <div style={{ padding: '50px 0px' }}>
            <Container maxWidth="lg">
                <p style={{ textAlign: 'center', fontSize: '23px', fontWeight: 300 }}>STUDY DESTINATIONS</p>
                <h1 style={{ textAlign: 'center', color: '#333', fontSize: '36px' }}>  Our Study <span className='title'>Destination Guide</span> Will Help You <br /> Decide Where The Journey Starts</h1>
                <div>
                    <div className='cardBox'>
                        <div className='gridContainer'>
                            {data.map((item, index) => (
                                <div key={index} className='countryCard'>
                                    <img src={item.image} alt={`Image ${index + 1}`} />
                                    <h2>{item.cityName}</h2>
                                    <p>{item.title}</p>
                                        <div className='link' onClick={()=>{handleClick(item.cityName)}}>
                                            <a className='link-href'>Discover </a>
                                            <ArrowForwardIcon className='icon-link' />
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='btn'>
                        <span onClick={GoPageStudyDestinations}> 
                            View All Study Destinations
                        </span>
                    </div>

                </div>
            </Container>
        </div>
    );
}
export default StudyDestinations;