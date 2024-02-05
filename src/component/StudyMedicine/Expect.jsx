import React from 'react';
import './index.css';
import { Container } from '@mui/material';
import HeadsetMicTwoToneIcon from '@mui/icons-material/HeadsetMicTwoTone';
import DevicesTwoToneIcon from '@mui/icons-material/DevicesTwoTone';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import AirplaneTicketTwoToneIcon from '@mui/icons-material/AirplaneTicketTwoTone';







// 
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SmartphoneTwoToneIcon from '@mui/icons-material/SmartphoneTwoTone';
import PlayCircleTwoToneIcon from '@mui/icons-material/PlayCircleTwoTone';
import LocalPostOfficeTwoToneIcon from '@mui/icons-material/LocalPostOfficeTwoTone';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
const Expect = () => {
    return (
        <div className='ExpectBody'>
            <Container maxWidth="lg">
                <h1>What To Expect From <span className='title'> Uni-App?</span></h1>
                
                <div className='ExpectBodyBox'>

                    <div>
                   
                        <HomeTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                        <h3>Accommodation Search</h3>
                        <p>We will help you to find a suitable apartment for you before you start your studies!</p>


                    </div>

                    <div>
                        <SmartphoneTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                       
                        <h3>Leaning App

                        </h3>
                        <p>Learn with fun on your iPhone or iPad, whether at home or on the go
                        </p>


                    </div>

                    <div>
                        <HeadsetMicTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                        <h3>Tutoring supervision</h3>
                        <p>From thousands of study programs, Apply to via your Uni-App</p>


                    </div>

                    <div>
                        <LocalPostOfficeTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                        <h3>Students starter package


                        </h3>
                        <p>We will equip you with the most important companions for your medical studies

                        </p>


                    </div>

                    <div>
                        <PlayCircleTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />
                       

                        <h3>Educational videos

                        </h3>
                        <p>Professional educational videos from professors from medical universities

                        </p>


                    </div>

                    <div>


                        <HubTwoToneIcon style={{ fontSize: "50px", color: "#76d4f9" }} />

                        <h3>Networking & Support

                        </h3>
                        <p>We are your local contact from day one and during your studies!</p>


                    </div>

                </div>
               
            </Container>
        </div>
    );
}
export default Expect;