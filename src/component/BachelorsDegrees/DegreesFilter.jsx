import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import './index.css';

const DegreesFilter = () => {
    const handleClick = () => {
        const url = 'https://uni-app.com/search';
        window.location.href = url;
    };

    const BrowseByCountry = [
        'Study in United States',
        'Study in United Kingdom',
        'Study in Germany',
        'Study in France',
        'Study in Netherlands',
        'Study in Canada',
        'Study in New Zealand',
        'Study in Australia',
        'Study in Ireland',
        'Study in Turkey'
    ];

    const BrowsebyUniversity = [
        'Arden University',
        'BSBI Berlin School of Business and Innovation',
        'eu Business School',
        'IU International University of Applied Sciences',
        'Munich Business School',
        'Paris School of Business',
        'SRH University of Applied Science',
        'Schiller International University',
        'Fresenius University',
        'London School of Business and Finance',
    ];


    const BrowsebyDiscipline = [
        'Business & Management studies',
        'Humanities studies',
        'Engineering & Technology studies',
        'Art, Design & Architecture studies',
        'Social Science studies',
        'Computer Science & IT studies',
        'Natural Science & Mathematics studies',
        'Law Studies',
        'Environment & Earth Science studies',
        'Hospitality, Leisure & Sport studies',
    ];

    const BrowsebyDegree = [
        'Computer Engineering',
        'Human Engineering',
        'Electrical Engineering and Computer Science',
        'Applied Economics and Management',
        'Operations Research',
        'Political Economy',
        'Actuarial Mathematics',
        'Electrical Power Engineering',
        'Business Analysis',
        'Pharmacy',
    ];



    const searchByQuery = (category, ele) => {
        let url;
        let country;
    
        if (ele.includes('Study in')) {
        
            country = ele.slice(8).trim();
    
            url = `https://uni-app.com/search?course=${category}=${country}`;
            
            window.location.href = url;
        } else { 
              country = ele
              url = `https://uni-app.com/search?course=${category}=${country}`;
           
              window.location.href = url;
        
        }
    };
   
    

    const filterData = (category,ele)=>{
        let url;
        if(category === 'q'){
            url = `https://uni-app.com/search?${category}=${ele}=Online`;
            window.location.href = url;
        }else{
            // url = `https://uni-app.com/search?${category}=${ele}&attendance=Online`;
            // window.location.href = url;
            console.log(url);
        }

        
    }


// https://uni-app.com/search?discipline=Computer Science & IT studies=Online


    return (
        <body className='degreeSection'>
            <Container maxWidth='lg'>
                <div className='degreesBy'>
                    <div>
                        <h2>Browse By Country</h2>
                        <hr style={{ width: '100%', borderTop: '1px solid #EEE', marginTop: '-30px', marginBottom: '25px' }} />
                        {BrowseByCountry.map((ele) => {
                            return (
                                <p  onClick={()=>{searchByQuery('Bachelor&country',ele)}} className='degreesText'>{ele}</p>
                            )
                        })}

                        <button className='submitCard' onClick={handleClick}> Start </button>

                    </div>

                    <div>
                        <h2>Browse by University</h2>

                        <hr style={{ width: '100%', borderTop: '1px solid #EEE', marginTop: '-30px', marginBottom: '25px' }} />
                        {BrowsebyUniversity.map((ele) => {
                            return (
                                <p onClick={()=>{searchByQuery('Bachelor&institute',ele)}}  className='degreesText'>{ele}</p>
                            )
                        })}

                        <button className='submitCard' onClick={handleClick}> Start </button>


                    </div>


                    <div>
                        <h2>Browse by Discipline</h2>
                        <hr style={{ width: '100%', borderTop: '1px solid #EEE', marginTop: '-30px', marginBottom: '25px' }} />
                        {BrowsebyDiscipline.map((ele) => {
                            return (
                                // onClick={()=>{searchByQuery('Bachelor&discipline',ele)}}
                                <p   onClick={()=>{filterData('discipline',ele)}} className='degreesText'>{ele}</p>
                            )
                        })}

                        <button className='submitCard' onClick={handleClick}> Start </button>


                    </div>

                    <div>
                        <h2>Browse by Degree</h2>
                        <hr style={{ width: '100%', borderTop: '1px solid #EEE', marginTop: '-30px', marginBottom: '25px' }} />
                        {BrowsebyDegree.map((ele) => {
                            return (
                                <p  onClick={()=>{filterData('q',ele)}} className='degreesText'>{ele}</p>
                            )
                        })}

                        <button className='submitCard' onClick={handleClick}> Start </button>


                    </div>
                </div>
            </Container>
        </body>
    );
}

export default DegreesFilter;
