import React from 'react';
import { Container, Box, Typography, styled, } from '@mui/material';
import { Link } from 'react-router-dom';

const Bannerbox = styled('div')({
    backgroundImage: 'url("/images/bg-slider.png")',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: '1',
    height: '100%',

    padding: '150px 0px 50px 0px',
    "& ::before": {
        position: 'absolute',
        content: '""',
        top: '0px;',
        left: '0px',
        width: '100%',
        height: '100%',
        background: '#09121d36',
        zIndex: '-1',
     

    }
})
const Imagebox= styled('div')({
    display:'flex',
    gap:'20px',
    alignItems:'center',
    marginTop:'30px',
    "& img":{
        width:'130px',
    }
})

function Bannerpage() {
    return (
        <>
            <Bannerbox>
                <Container>
                    <Box sx={{maxWidth:{lg:'45%',md:'100%'}}}>
                        <Typography variant='h1'>Secure Your Digital Assets with CryptoVault
                        </Typography>
                        <Typography variant='body1' pt={2}>Unlock a world of digital finance with CryptoVault,
                            your trusted partner in safeguarding and managing
                            cryptocurrencies.</Typography>
                        <Imagebox>
                            <Link to="">
                                <img src="/images/apple-img.png" alt="" />
                            </Link>
                            <Link to="">
                                <img src="/images/play-store-logo.png" alt="" />
                            </Link>
                        </Imagebox>
                    </Box>
                </Container>
            </Bannerbox>
        </>
    );
}

export default Bannerpage;