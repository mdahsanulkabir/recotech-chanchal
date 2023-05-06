import React from 'react';
import { Box, Button, Container, Stack } from '@mui/material'
import'./Navbar.css'


const Navbar = () => {

    
        addEventListener("scroll", () => {
        const header = document.querySelector(".header")!;
        console.log(header);
        header.classList.toggle('sticky', scrollY > 0)
        })
    
    
    return (
        <Box className='header' sx={{width:'100%'}}>
            <Box sx={{width: '100%',display: 'flex', alignContent:'center', justifyContent:'space-between'}}>
                <Box>
                    <img width='50px' src='logo.png' alt="logo partner"/>
                    <img width='50px' src="logo1.png" alt="logo recotech" />
                </Box>
                <Box sx={{marginLeft: 'auto', display:'flex'}}>
                    <Stack direction="row" spacing={1}>
                        <Button >Home</Button>
                        <Button >About Us</Button>
                        <Button >Product & Solutions</Button>
                        <Button >Projects</Button>
                        <Button >Clients</Button>
                        <Button >Contact Us</Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;