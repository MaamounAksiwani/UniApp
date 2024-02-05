import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import HeadsetMicTwoToneIcon from '@mui/icons-material/HeadsetMicTwoTone';
import DevicesTwoToneIcon from '@mui/icons-material/DevicesTwoTone';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import AirplaneTicketTwoToneIcon from '@mui/icons-material/AirplaneTicketTwoTone';


const ChooseUniApp = () => {
    return (
        <div className='platFormPart'>

            <Container maxWidth="lg">
                <h1>Why Choose <span className='title'> Uni-App?</span></h1>

                <div className='platformBox'>

                    <div>
                        {/* <ShieldIcon style={{ fontSize: "75px", color: "#76d4f9" }} /> */}
                        <HeadsetMicTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }}  />
                        <h3>Assdmission Counselling</h3>
                        <p>From the comfort of your home, talk to a study agent near you and receive a free consultation
                        </p>


                    </div>

                    <div>
                        <AirplaneTicketTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                        {/* <FlightTakeoffIcon style={{ fontSize: "75px", color: "#76d4f9" }} /> */}
                        <h3>Visa Assistance
                        </h3>
                        <p>With the help of our agents in your country, the visa process will be simplified
                        </p>


                    </div>

                    <div>
                    <HandshakeTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />                        <h3>Partner Schools
                        </h3>
                        <p>From thousands of study programs, Apply to via your Uni-App
                        </p>


                    </div>



                    <div>
                    <QuestionAnswerTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                        <h3>Continuous Support
                        </h3>
                        <p>Study agents provide 1-on-1 support at any step of the journey
                        </p>


                    </div>

                    <div>
                        <StarTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }}  />
                        {/* <VolunteerActivismIcon style={{ fontSize: "75px", color: "#76d4f9" }} />        */}
                        
                                         <h3>Scholarships
                        </h3>
                        <p>Our partner universities offer exclusive scholarships and other financial support options
                        </p>


                    </div>

                    <div>


<DevicesTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />

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