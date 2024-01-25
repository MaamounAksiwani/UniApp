import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './index.css';
import UniAppTimeStudents from '../../../until/Image/uni-app-first-time.png'
import UniAppSecTimeStudents from '../../../until/Image/uni-app-sec-time.png'
import { Link, NavLink } from 'react-router-dom'
const UniAppTImeStudents = () => {
    return (
        <>
            <div className='contact'>
                <div>
                    <h1> <span className='title'>UniApp</span> For First Time Students</h1>
                    <p>Yearly, more than 450 million students start their secondary school, through our online university application platform students can plan accordingly what and where to study, Learn more about applying through our first-time application guide
                    </p>
                    <div className='transferLink'>
                        <Link to='/' className='transfer-page'>First-Time-Students-Guide </Link>
                        <ArrowRightAltIcon style={{ color: '#6EC1E4', fontSize: '25px' }} />
                    </div>
                </div>

                <div>
                    <img src={UniAppTimeStudents} alt='image not found ' />
                </div>
            </div>



            <div className='contact'>

                <div>
                    <img src={UniAppSecTimeStudents} alt='image not found ' />
                </div>
                <div>
                    <h1> <span className='title'>UniApp</span> For Transfer  Students</h1>
                    <p>UniApp supports your application to transfer through our platform, you'll be able to matched
                        for and apply to any of our partner universities that accept Uni App for transfer
                    </p>
                    <div className='transferLink'>
                        <Link to='/' className='transfer-page'>Transfer-Students-Guide </Link>
                        <ArrowRightAltIcon style={{ color: '#6EC1E4', fontSize: '25px' }} />
                    </div>
                </div>

            </div>


            <div className='Guide-Support'>

                <h1>Student Application Guide Support</h1>
                <h6>it’s time to prepare for your future, it’s never early or too late. Our student application guide will ease uni planning for you</h6>
                <div>
                log into your uniapp account for support
                </div>
                
                {/* <div className='transferLink'>
                    <Link to='/' className='transfer-page'>Log into your uniapp account for support</Link>
                    <ArrowRightAltIcon style={{ color: '#6EC1E4', fontSize: '25px' }} />
                </div> */}
            </div>
        </>
    );
}
export default UniAppTImeStudents;