 import { Button, Grid, Typography } from '@mui/material';
 import React from 'react';


 const Banner = () => {
    return (
 
        <div style={{background:`url(https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500)`, paddingTop:'90px'}}>

          
             {/* <img src={'	https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2013/06/18.png.webp'} alt="" />  */}
             {/* https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/01/06-2.png.webp

            https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/01/06-2.png.webp


            https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/01/06-2.png.webp



            https://cardealer.potenzaglobalsolutions.com/wp-content/themes/cardealer/images/car.png




            https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/03/woman-image.png.webp  */}
  <Grid container spacing={2} >
                       
                        <Grid item xs={12} sm={5}>
                         <Typography variant='h2' sx={{color:'white'}} > Drive your favorite Luxury Car
            
                         
                         </Typography>
                         <Typography sx={{color:'white'}}>The fastest and easiest rental process, drive your favorite car within the next 24 hours</Typography>
                        <Button  variant="contained" color="success" sx={{marginTop:'10px'}}>Talk to a Manager</Button>
                        </Grid>
                        <Grid item xs={12} sm={7} >
                        <img src={'    https://html.merku.love/rotors/demo_assets/images/banner/img_01.png'} alt=""  />
                   
                          
                        </Grid>
                        </Grid>



        </div>

      
    );
};

export default Banner;




