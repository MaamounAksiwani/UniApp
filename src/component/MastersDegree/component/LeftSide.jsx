import React from 'react';
import './index.css';
import EastIcon from '@mui/icons-material/East';
import FIlterSection from './FIlterSection';

const LeftSide = () => {

    return (
        <div className='LeftSideMenu'>
            <h2>Popular posts</h2>

            <div>
                <EastIcon className='arrowStyle' />
                <p>(no title)</p>
            </div>
            <hr style={{ width: '100%', borderTop: '1px solid #EEE' }} />
            <div>
                <EastIcon className='arrowStyle' />
                <p>Where to Source For Academic Papers</p>
            </div>
            <hr style={{ width: '100%', borderTop: '1px solid #EEE' }} />

            <div>
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