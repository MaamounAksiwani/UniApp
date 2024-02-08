import React from 'react';
import Container from "@mui/material/Container";
import './index.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import germanyImg from '../../../src/until/Image/germany.svg';
import img2 from '../../until/Image/c-29.svg';
import img3 from '../../until/Image/c-30.svg';
import img4 from '../../until/Image/c-31.svg';
import img5 from '../../until/Image/c-32.svg';
import img6 from '../../until/Image/c-33.svg';
import img7 from '../../until/Image/c-34.svg';
import img8 from '../../until/Image/c-35.svg';


const Country = () => {

    const data = [
        {
            id: 1,
            cityName: "Germany",
            title: "German universities are among the most important universities around the world, and the most interested in qualifying students for the labor",
            url: "path",
            image: germanyImg
        },
        {
            id: 2,
            cityName: "Slovakia",
            title: "Slovakia is the most popular city to study medicine for international students The degrees here are taught in English ",
            url: "path",
            image: img4
        }
        ,
        {
            id: 3,
            cityName: "Latvia",
            title: "Studying medicine in Latvia? You have made the right decision. The popular universities for medicine in Latvia made their mark in history",
            url: "path",
            image:img2
        },
        {
            id: 4,
            cityName: "Hungary",
            title: "Hungary, and particularly Budapest, its capital, is an excellent destination to study medicine in Europe in english",
            url: "path",
            image: img3
        },
        {
            id: 5,
            cityName: "Czech Republic",
            title: "Study medicine in the Czech Republic proves to be the best international destination for medical studies",
            url: "path",
            image: img8
        },
        {
            id: 6,
            cityName: "Lithuania",
            title: "Lithuania is one the best destinations to study medicine in Europe, medicine is one of the most sought-after careers..",
            url: "path",
            image: img7
        },
        {
            id: 7,
            cityName: "Cyprus",
            title: "Cyprus hosts some of the leading medical institutes in Europe. If you aspire to become a medical practitioner",
            url: "path",
            image: img6
        },
        {
            id: 8,
            cityName: "Romania",
            title: "Do you wish to study MBBS in Romania? Romania is your best option to pursue a medical science degree",
            url: "path",
            image: img5
        }
    ]
    return (
        <div style={{ padding: '50px 0px' }}>
            <Container maxWidth='lg'>
                <div className='countryTitle'>
                    <p>MEDICAL STUDY DESTINATIONS ABROAD</p>
                    <h1>Choose Where To Study Medicine In Europe, <br /> English-Taught Programmes</h1>
                </div>

                <div className='countryBox'>


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
