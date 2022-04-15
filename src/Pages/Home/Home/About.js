import { Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../Shared/Footer';
import './About.css'

const About = () => {
    return (
     <>
         <Box className='setImage' style={{marginTop:'17px'}}>
          
            {/* <img src="https://newevolutiondesigns.com/images/freebies/car-facebook-cover-4.jpg" alt="" /> */}
            <Container   >
            <Grid container spacing={2} >
                        <Grid item xs={12} sm={5}>
                     <Typography variant='h2' sx={{color:'white', marginTop:'150px'}}><b>About Us...</b></Typography>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                        <img style={{marginTop:'33px', height: '350px'}} src=" https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/03/woman-image.png.webp " alt="" />
                        </Grid>
                        </Grid>
                        </Container>
                  

                        </Box>
                        <Footer></Footer>
                        </>
       
    );
};

export default About;