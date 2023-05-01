import { Box, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import React from 'react';
import Navbar from '../component/Navbar';

const Home = () => {
    return (
        <Box>
            <Box
                sx={{
                    width: '100%',
                    height:'55px',
                    // backgroundColor: 'transparent',
                    background: 'linear-gradient(240deg, #ffffff 50%, #149347 50%)',
                    m: 0, p: '15px 0'
                }}
            >
                <Box display={'flex'} alignItems={'center'} maxWidth={'80%'} marginX={'auto'}>
                    <Box sx={{display: 'flex', color:'#fff', alignItems:'center'}}><CallIcon /><Typography fontWeight={'700'}>Call us: +8801841-632240</Typography></Box>
                    <Box sx={{marginLeft: 'auto', display:'flex'}}>
                        <Stack direction="row" spacing={1}>
                            <Avatar sx={{ bgcolor: "#149347", width:'30px', height:'30px' }}>
                                <FacebookOutlinedIcon />
                            </Avatar>
                            <Avatar sx={{ bgcolor: "#149347",width:'30px', height:'30px' }}>
                                <InstagramIcon />
                            </Avatar>
                            <Avatar sx={{ bgcolor: "#149347",width:'30px', height:'30px' }}>
                                <TwitterIcon />
                            </Avatar>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Navbar />
        </Box>
    );
};

export default Home;