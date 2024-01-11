import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Topbar from '../../HomeLayout/Topbar';

function Projectpage() {
    return (
        <Box>
            <AppBar sx={{ background: 'green', padding: '10px 0px' }}>
                <Toolbar>
                    <Topbar />
                </Toolbar>
            </AppBar>
            <Box sx={{ padding: '100px 0px 50px 0px' }}>
                <Container>
                    <Typography variant='h2'>I am Project page Don't Worry!</Typography>
                </Container>
            </Box>
        </Box>
    );
}
export default Projectpage;