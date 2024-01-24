import React from 'react';
import './index.css';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PeopleIcon from '@mui/icons-material/People';
import { Container } from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


import ShieldIcon from '@mui/icons-material/Shield';
const ChooseUniApp = () => {
    return (
        <div className='platFormPart'>

            <Container maxWidth="lg">
                <h1>Why Choose <span className='title'> Uni-App?</span></h1>

                <div className='platformBox'>

                    <div>
                        <ShieldIcon style={{ fontSize: "75px", color: "#76d4f9" }} />
                        <h3>Admission Counselling</h3>
                        <p>From the comfort of your home, talk to a study agent near you and receive a free consultation
                        </p>


                    </div>

                    <div>
                        <FlightTakeoffIcon style={{ fontSize: "75px", color: "#76d4f9" }} />
                        <h3>Visa Assistance
                        </h3>
                        <p>With the help of our agents in your country, the visa process will be simplified
                        </p>


                    </div>

                    <div>
                        <FlightTakeoffIcon style={{ fontSize: "75px", color: "#76d4f9" }} />
                        <h3>Partner Schools
                        </h3>
                        <p>From thousands of study programs, Apply to via your Uni-App
                        </p>


                    </div>



                    <div>
                        <PeopleIcon style={{ fontSize: "75px", color: "#76d4f9" }} />
                        <h3>Continuous Support
                        </h3>
                        <p>Study agents provide 1-on-1 support at any step of the journey
                        </p>


                    </div>

                    <div>
                        <VolunteerActivismIcon style={{ fontSize: "75px", color: "#76d4f9" }} />                        <h3>Scholarships
                        </h3>
                        <p>Our partner universities offer exclusive scholarships and other financial support options
                        </p>


                    </div>

                    <div>


                        <DevicesIcon style={{ fontSize: "75px", color: "#76d4f9" }} />

                        <h3>Smart Application

                        </h3>
                        <p>With Uni-App, you will be able to apply for multiple programs with one click

                        </p>


                    </div>




                </div>
            </Container>


        </div>
    );
}
export default ChooseUniApp;