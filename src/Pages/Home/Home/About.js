import { Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './About.css'

const About = () => {
    return (
     
         <Box className='setImage'>
          
            {/* <img src="https://newevolutiondesigns.com/images/freebies/car-facebook-cover-4.jpg" alt="" /> */}
            <Container   >
            <Grid container spacing={2} >
                        <Grid item xs={12} sm={5}>
                        <TextField id="standard-basic" label="Standard" variant="standard" sx={{marginRight:'350px', marginTop:'450px'}}/>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                        <img style={{paddingTop:'49px'}} src=" https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/03/woman-image.png.webp " alt="" />
                        </Grid>
                        </Grid>
                        </Container>

                        </Box>

       
    );
};

export default About;