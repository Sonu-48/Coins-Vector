import React from 'react';
import Topbar from './Topbar';
import Bannerpage from '../pages/Home/Bannerpage';
import { Box } from '@mui/material';
import Category from '../pages/Home/Category';

function Homelayout(){
    return(
        <Box>
            <Topbar/>
            <Category/>
            {/* <Bannerpage/> */}
            
        </Box>
    );
}
export default Homelayout;