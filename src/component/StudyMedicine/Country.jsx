import React from 'react';
import Container from "@mui/material/Container";
import './index.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import germanyImg from '../../../src/until/Image/germany.svg'

const Country = () => {

    const data = [
        {
            id: 1,
            cityName: "Germany",
            title: "German universities are among the most important universities around the world, and the most interested in qualifying students for the labor market",
            url: "path",
            image: germanyImg
        },
        {
            id: 2,
            cityName: "Slovakia",
            title: "Slovakia is the most popular city to study medicine for international students The degrees here are taught in English ",
            url: "path",
            image: germanyImg
        }
        ,
        {
            id: 3,
            cityName: "Latvia",
            title: "Studying medicine in Latvia? You have made the right decision. The popular universities for medicine in Latvia made their mark in history",
            url: "path",
            image: germanyImg
        },
        {
            id: 4,
            cityName: "Hungary",
            title: "Hungary, and particularly Budapest, its capital, is an excellent destination to study medicine in Europe in english",
            url: "path",
            image: germanyImg
        },
        {
            id: 5,
            cityName: "Czech Republic",
            title: "Study medicine in the Czech Republic proves to be the best international destination for medical studies",
            url: "path",
            image: germanyImg
        },
        {
            id: 6,
            cityName: "Lithuania",
            title: "Lithuania is one the best destinations to study medicine in Europe, medicine is one of the most sought-after careers..",
            url: "path",
            image: germanyImg
        },
        {
            id: 7,
            cityName: "Cyprus",
            title: "Cyprus hosts some of the leading medical institutes in Europe. If you aspire to become a medical practitioner",
            url: "path",
            image: germanyImg
        },
        {
            id: 8,
            cityName: "Romania",
            title: "Do you wish to study MBBS in Romania? Romania is your best option to pursue a medical science degree",
            url: "path",
            image: germanyImg
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
