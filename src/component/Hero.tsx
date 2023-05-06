import { Box } from '@mui/material'

const Hero = () => {
    return (
        <Box sx={{
                width: '100%', 
                height:'800px',
                background: `url("/assets/hero/r-ecotec_slider-02.jpg")`, 
                backgroundSize:'cover',
                backgroundPositionY:'center'
            }}>
            {/* <img src="../../public/assets/hero/r-ecotec_slider-02.jpg" alt="" /> */}
        </Box>
    );
};

export default Hero;