import React from 'react';
import './index.css';
import EastIcon from '@mui/icons-material/East';
import FIlterSection from './FIlterSection';
import { useNavigate } from 'react-router';
const LeftSide = () => {
    const navigate = useNavigate();
    return (
        <div className='LeftSideMenu'>
            <h2>Popular posts</h2>

            <div onClick={() => { navigate('/14128-2/') }}>
                <EastIcon className='arrowStyle' />
                <p>(no title)</p>
            </div>
            <hr style={{ width: '100%', borderTop: '1px solid #EEE' }} />
            <div onClick={() => { navigate('/where-to-source-for-academic-papers/') }}>
                <EastIcon className='arrowStyle' />
                <p>Where to Source For Academic Papers</p>
            </div>
            <hr style={{ width: '100%', borderTop: '1px solid #EEE' }} />

            <div onClick={()=>{navigate('/study-medicine-in-germany-for-international-students/')}}>
                <EastIcon className='arrowStyle' />
                <p>The Ultimate Guide to Study Medicine in Germany for International Students in 2023</p>
            </div>
            <hr style={{ width: '100%', borderTop: '1px solid #EEE' }} />

            <div>
                <EastIcon className='arrowStyle' />
                <p>How to Study Medicine in Germany in English? Breaking the Language Barrier</p>
            </div>
            <hr style={{ width: '100%', borderTop: '1px solid #EEE' }} />

            <div>
                <EastIcon className='arrowStyle' />
                <p>The Essential Steps to Study Medicine in Germany: The Path to Medical Excellence</p>
            </div>
            <hr style={{ width: '100%', borderTop: '1px solid #EEE' }} />


            <FIlterSection/>

        </div>
    );
}

export default LeftSide;