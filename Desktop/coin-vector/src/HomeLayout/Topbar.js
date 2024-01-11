import React from 'react';
import { Container, Box, Toolbar, AppBar,styled,IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';

const Navlinkbox= styled('div')({
    display:'flex',
    alignItems:'center',
   "& a":{
    marginRight:'30px',
    textDecoration:'none',
    color:'#fff',
    fontSize:'16px',
    fontWeight:'700',
   },
   "& img":{
        width:'120px',
   },
   "& .active":{
    color:'#86FF00',
    fontSize:'16px',
    fontWeight:'700',
   }
})

function Topbar() {
    return (
        <Box>
            <AppBar sx={{ background: 'transparent',boxShadow:'none', }}>
                <Container style={{maxWidth:'1300px'}}>
                    <Toolbar sx={{justifyContent:'space-between',height:'100px'}}>
                        <Box>
                            <NavLink to="/">
                                <img src="/images/coinvector-logo.png" alt="logo" style={{ maxWidth: '150px', }} />
                            </NavLink>
                        </Box>
                        <Box sx={{display:{lg:'block',md:'none',sm:'none',xs:'none'}}}>
                        <Navlinkbox >
                            <NavLink to="/" activeClassName="active">Home</NavLink>
                            <NavLink to="/project">Project</NavLink>
                            <NavLink to="/page">Page</NavLink>
                            <NavLink to="/roadmap">Roadmap</NavLink>
                            <NavLink to="/blog">Blog</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <NavLink to="">
                                <img src="/images/apple-img.png" alt="Apple Image" />
                            </NavLink>
                            <NavLink to="">
                                <img src="/images/play-store-logo.png" alt="Play Store Image" />
                            </NavLink>
                        </Navlinkbox>
                        </Box>
                        
                        {/* Icons for Mobile */}
                        <IconButton sx={{display:{lg:'none',md:'block',sm:'block',xs:'block'},background:'#fff'}}>
                            <FiMenu/>
                        </IconButton>
                    </Toolbar>
                </Container>

            </AppBar>

        </Box>
    );
}
export default Topbar;