import React, { useState } from 'react';
import './index.css';

import SellIcon from '@mui/icons-material/Sell';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const ShareLink = ({ title
    , subTitle }) => {

    const [showOptions, setShowOptions] = useState(false);

    const handleIconHover = () => {
        setShowOptions(true);
    };

    const handleIconLeave = () => {
        setShowOptions(false);
    };

    return (
        <>

            <div className='shareLink'>
                <div>
                    <SellIcon style={{ color: '#696969', fontSize: '22px' }} />
                    <p>{title}</p>
                    <p>{subTitle}</p>
                </div>


                <p style={{ marginRight: '15px', fontWeight: '400' }}>Share this post</p>
                <div onMouseEnter={handleIconHover} style={{ position: 'relative' }}
                    onMouseLeave={handleIconLeave}>
                    <ShareIcon className='shareIcon' />
                    {showOptions && (
                        <div style={{
                            position: 'absolute',
                            bottom: '100%',
                            left: '-100%',
                            marginBottom: '2px',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#FFF',
                            borderRadius: '5px',
                            padding: '10px 35px',
                            whiteSpace: 'nowrap',
                            boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.1)'

                        }}>
                            <FacebookIcon className='FacebookIcon' />
                            <TwitterIcon className='TwitterIcon' />
                            <InstagramIcon className='InstagramIcon' />
                            <LinkedInIcon className='LinkedInIcon' />
                        </div>
                    )}
                </div>



            </div>
            <hr style={{ width: '100%', borderTop: '1px solid #DDD', marginBottom: '25px' }} />
        </>

    );
}

export default ShareLink;