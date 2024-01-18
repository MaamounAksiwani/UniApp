
import React from 'react';
import './index.css';
import { Container } from '@mui/material';

const Map = () => {
    const mapUrl = `https://www.google.com/maps?ll=50.10058,8.635232&z=8&t=m&hl=en-US&gl=US&mapclient=embed&cid=16854932331660347854`;
    return (
        <div style={{margin:'50px 0px 25px 0px'}}> 

            <Container maxWidth="lg">

                <iframe
                    title="RandomLocationMap"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    src={mapUrl}
                    allowFullScreen
                />

            </Container>

        </div>
    );
}

export default Map;