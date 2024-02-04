import React from 'react';
import Container from "@mui/material/Container";
import './index.css'
import germanyImg from '../../../src/until/Image/germany.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Country = () => {

    const data = [
        {
            id: 1,
            cityName: "Germany",
            title: "German universities are among the most important universities around the world, and the most interested in qualifying students for the labor market",
            url: "path",
            image: "https://uni-app.com/wp-content/uploads/2022/02/UDRUS-POST-18-1.svg",
        },
        {
            id: 2,
            cityName: "France",
            title: "France includes public universities for international students. Also, it has 27 French universities that are ranked among the top 500 universities",
            url: "path",
            image: "https://uni-app.com/wp-content/uploads/2022/02/FRANCE-19.svg",
        }
        ,
        {
            id: 3,
            cityName: "USA",
            title: "USA is one country that has the largest international student population in the world. With more than 5% international student population in the mix",
            url: "path",
            image: "https://uni-app.com/wp-content/uploads/2022/02/USA-20.svg",
        },
        {
            id: 4,
            cityName: "United Kingdom",
            title: "UK is the favourite international destination for students who wish to make their academic careers shine. Being home to prestigious universities",
            url: "path",
            image: "https://uni-app.com/wp-content/uploads/2022/02/UK-21.svg",
        }
    ]
    return (
        <div style={{ padding: '50px 0px' }}>
            <Container maxWidth='lg'>
                <div className='countryTitle'>
                    <p>MEDICAL STUDY DESTINATIONS ABROAD</p>
                    <h1>Choose Where To Study Medicine In Europe, <br /> English-Taught Programmes</h1>
                </div>

                <div  className='countryBox'>

                   
 <div className='cardBox'>
                        <div className='gridContainer'>
                            {data.map((item, index) => (
                                <div key={index} className='countryCard'>
                                    <img src={item.image} alt={`Image ${index + 1}`} />
                                    <h2>{item.cityName}</h2>
                                    <p>{item.title}</p>
                                        <div className='link'>
                                            <a className='link-href'>Discover </a>
                                            <ArrowForwardIcon className='icon-link' />
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

        </div>

    );
};

export default Country;
