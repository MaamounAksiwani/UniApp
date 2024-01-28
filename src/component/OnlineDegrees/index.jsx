import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';
import './index.css';
import DegreesFilter from '../BachelorsDegrees/DegreesFilter';
import OnlineContent from './OnlineContent';
const OnlineDegrees = () => {
    const [selectedCity, setSelectedCity] = useState('Germany');

    const handleClick = () => {
        if(selectedCity){
            const url = `https://uni-app.com/search?country=${selectedCity}`;
            window.location.href = url;
        }else{
            const url = 'https://uni-app.com/search';
            window.location.href = url;

        }
    };

    const city = [
        "Germany",
        "United Kingdom",
        'United States',
        "Australia",
        "Canada",
        'France',
        "Netherlands",
        "Ireland",
    ]

    const handleCityChange = (event) => {

        setSelectedCity(event.target.value);
    };
    
    return (
        <body className='degreeSection'>
            <div className="parentTheCountry">
                <div className="backgroundImageMainCountry"></div>
                <div className="CountryOverlay"></div>
                <Container maxWidth="lg">
                    <div className="BachelorsDegreesText">
                       <h1>Discover Best Online Degrees Worldwide!</h1>

                        <div className='inputContainer'>
                            <TextField
                                placeholder='What do you want to study'
                                className="TextField-root"
                            />
                            {/* <TextField
                                placeholder='Where do you want to study'
                                className="TextField-root"
                            /> */}

                            {/* {city.map((ele, index) => (
                                        <div className="select-box__value" key={index}>
                                            <input
                                                className="select-box__input"
                                                type="radio"
                                                id={`option${index}`}
                                                value={ele}
                                                name="Ben"
                                                checked={ele === selectedCity}
                                                onChange={handleCityChange}
                                            />
                                            <p className="select-box__input-text">{ele}</p>
                                        </div>
                                    ))} */}

                            {/*  */}


                            <div className="select-box">
                                <div className="select-box__current" tabIndex="1">

                                    {/* <TextField
                                        placeholder='Where do you want to study'
                                        className="TextField-root"
                                    /> */}
                                    {city.map((ele, index) => (
                                        <div className="select-box__value" key={index}>
                                            <input
                                                className="select-box__input"
                                                type="radio"
                                                id={`option${index}`}
                                                placeholder='ENTER'
                                                value={ele}
                                                name="Ben"
                                                checked={ele === selectedCity}
                                                onChange={handleCityChange}
                                            />
                                            <p className="select-box__input-text">{ele}</p>
                                        </div>
                                    ))}
                                    <img
                                        className="select-box__icon"
                                        src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                                        alt="Arrow Icon"
                                        aria-hidden="true"
                                    />
                                </div>
                                <ul className="select-box__list">
                                    {city.map((ele, index) => (
                                        <li key={index}>
                                            <label
                                                className="select-box__option"
                                                htmlFor={`option${index}`}
                                                aria-hidden="aria-hidden"
                                            >
                                                {ele}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* END */}



                        </div>
                        <button className='submit' onClick={handleClick}> Start </button>
                    </div>
                </Container>
            </div>


            <DegreesFilter />
            <OnlineContent/>

        </body>
    );
}

export default OnlineDegrees;
