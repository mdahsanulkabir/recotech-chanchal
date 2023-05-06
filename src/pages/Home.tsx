import { Box, Grid, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import ServiceCard from '../component/ServiceCard';

const Home = () => {
    return (
        <Box >
            <Box
                sx={{
                    width: '100%',
                    height: '55px',
                    // backgroundColor: 'transparent',
                    background: 'linear-gradient(240deg, #ffffff 50%, #149347 50%)',
                    m: 0, p: '15px 0'
                }}
            >
                <Box display={'flex'} alignItems={'center'} maxWidth={'80%'} marginX={'auto'}>
                    <Box sx={{ display: 'flex', color: '#fff', alignItems: 'center' }}><CallIcon /><Typography fontWeight={'700'}>Call us: +8801841-632240</Typography></Box>
                    <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
                        <Stack direction="row" spacing={1}>
                            <Avatar sx={{ bgcolor: "#149347", width: '30px', height: '30px' }}>
                                <FacebookOutlinedIcon />
                            </Avatar>
                            <Avatar sx={{ bgcolor: "#149347", width: '30px', height: '30px' }}>
                                <InstagramIcon />
                            </Avatar>
                            <Avatar sx={{ bgcolor: "#149347", width: '30px', height: '30px' }}>
                                <TwitterIcon />
                            </Avatar>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Navbar />
            <Hero />


            <Box marginX={'15px'}>
            {/* About us */}
                <Box maxWidth={'1200px'} marginX={'auto'} marginY={'20px'}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography variant='h5' fontWeight={700} color={'#149347'} textAlign={'right'}>About Us</Typography>
                            <p>
                                <Typography variant='h3' textAlign={'right'} fontFamily={'Poppins'}>RECOTEC has decades of experience to support you</Typography>
                            </p>
                            <p>
                                <Typography>
                                    The RECOTEC team has strong relationships with engineers, technicians and maintenance personnel. The in-house experience at RECOTEC, coupled with the team’s extensive outside relationships provides clients with the services they need and the expertise they can trust.
                                </Typography>
                            </p>
                            <p>
                                <Typography>
                                    Everyone at RECOTEC is committed to working closely with our clients, ensuring that their needs are met and that each and every job is carried out safely, reliably and at a fair cost.
                                </Typography>
                            </p>
                            <p>
                                <Typography>
                                    With experience doing work for a wide spectrum of clients, the RECOTEC team and our trusted partners are prepared to meet your project needs. When choosing RECOTEC you’re getting more than a contractor, you’re getting a partner.
                                </Typography>
                            </p>
                        </Grid>
                        <Grid item md={6}>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                background: `url("/assets/hero/r-ecotec_slider-02.jpg")`,
                                backgroundSize: 'cover',
                                backgroundPositionY: 'center'
                            }}>
                                lknlknlbljbl
                                ljbkjbljb
                                sdfds
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                {/* service */}
                <Box maxWidth={'1200px'} marginX={'auto'} textAlign={'center'}>
                    <Typography>Our Services</Typography>
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <ServiceCard
                                image="/assets/services/construction.jpg"
                                heading="CONSTRUCTION EQUIPMENT"
                                contentText='We are obliged to complete the construction project within a given time and budget – such agreements are also known as lump sum turnkey (LSTK) contracts.'
                            />
                        </Grid>
                        <Grid item md={4}>
                            <ServiceCard 
                                image="/assets/services/engine.jpg"
                                heading="ENGINE & GENERATING SET"
                                contentText='We are able to provide the complete Power Plant (CPP & IPP) from 2 MW to 100MW , run by Natural Gas/LNG, Diesel, HFO etc sourcing the equipment from international recognized and proven manufacturer. We also can provide generating set from 20KVA & above ,powered by different engines including Perkins, DEUTZ, VOLVO, Yanmar etc.'
                            />
                        </Grid>
                        <Grid item md={4}>
                            <ServiceCard 
                                image="/public/assets/services/elevator_lift.jpg"
                                heading="LIFT, ESCALATOR AND MOVING WALKWAY"
                                contentText='We are able to supply World Top class lift, Escalator and moving walk ways from different countries including Germany, China, Korea etc.'
                            />
                        </Grid>
                        <Grid item md={4}>
                            <ServiceCard 
                                image="/public/assets/services/elevator_lift.jpg"
                                heading="EPC"
                                contentText='In the construction industry, EPC is an acronym for Engineering, Procurement and Construction in connection with projects such as tank terminals. It is a standard term that refers to a special form of project execution and contract design.'
                            />
                        </Grid>
                        <Grid item md={4}>
                            <ServiceCard 
                                image="/public/assets/services/elevator_lift.jpg"
                                heading="SUPPLY, SPARE PARTS, SERVICE & MAINTENANCE"
                                contentText='RECOTEC offer a range of expert generator solutions from repairs and servicing, to maintenance and monitoring.'
                            />
                        </Grid>
                        <Grid item md={4}>
                            <ServiceCard 
                                image="/public/assets/services/elevator_lift.jpg"
                                heading="AUTOMATION & INDUSTRIAL SERVICES"
                                contentText='Our experienced professionals have a leading role in Automation sector in industries where use of control systems and information technologies.'
                            />
                        </Grid>
                    </Grid>

                </Box>
            </Box>

            <Box>the quick brown fox jumns over the laze docg</Box>
            <Box>the quick brown fox jumns over the laze docg</Box>
            <Box>the quick brown fox jumns over the laze docg</Box>
            <Box>the quick brown fox jumns over the laze docg</Box>
        </Box>
    );
};

export default Home;