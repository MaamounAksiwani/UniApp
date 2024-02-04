import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import arrow from '../../../src/until/Image/SVG/angle-right-light.svg'

import { useNavigate } from 'react-router';

const AllCountries = () => {
    const navigate = useNavigate();

    const countries = [
        "Afghanistan",
        "Albania",
        "Antigua and Barbuda",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belgium",
        "Bosnia and Herzegovina",
        "Brazil",
        "Bulgaria",
        "Canada",
        "Cayman Islands",
        "China",
        "Costa Rica",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Dominica",
        "Egypt",
        "Estonia",
        "Ethiopia",
        "Europe",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Iran",
        "Ireland",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kuwait",
        "Kyrgyzstan",
        "Latvia",
        "Lebanon",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Macedonia",
        "Malaysia",
        "Maldives",
        "Malta",
        "Mauritius",
        "Mexico",
        "Monaco",
        "Morocco",
        "Namibia",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Northern Cyprus",
        "Norway",
        "Oman",
        "Pakistan",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saudi Arabia",
        "Serbia",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "Sweden",
        "Switzerland",
        "Taiwan",
        "Tanzania",
        "Thailand",
        "The United Arab Emirates",
        "Turkey",
        "Uganda",
        "Ukraine",
        "United Kingdom",
        "United States"
    ];

    const handelPage = (ele) => {
        if (ele === 'Afghanistan') {
            navigate('/Afghanistan/')
        }
    }

    return (
        <>
            <div className="parentTheCountry">
                <div className="backgroundImageMainCountry"></div>
                <div className="CountryOverlay"></div>
                <Container maxWidth="lg">
                    <div className="CountryTextt">
                        <h1>Find Bachelor's and Master's Degrees Worldwide</h1>
                    </div>
                </Container>
            </div>


            <Container maxWidth="lg">
                <div className='city'>
                    {countries.map((ele) => {
                        return (
                            <div onClick={() => { handelPage(ele) }}>
                                <p>{ele}  </p>
                                <ArrowForwardIosIcon style={{ fontSize: '15px', marginLeft: '5px' }} />
                            </div>
                        )
                    })}
                </div>
            </Container>
        </>
    );
}
export default AllCountries;