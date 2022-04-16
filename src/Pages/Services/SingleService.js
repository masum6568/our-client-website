import { Alert, Box, Button, Container, Grid, ImageList, ImageListItem, Rating, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer';
import BookingService from './BookingService';




const SingleService = () => {
    const { _id } = useParams();
    const [service, setService] = useState({});


    useEffect(() => {
        const hello = async () => {
            await
            
            fetch(`https://nameless-thicket-17201.herokuapp.com/products/${_id}`)
                .then(res => res.json())
                .then(data => setService(data))
        }
        hello()
    }, [])

    return (
        <div>
        <div style={{background:`url(https://wallpaperaccess.com/full/740013.jpg)`, paddingTop:'90px',
    backgroundRepeat:'no-repeat', backgroundSize:'cover', width:'100%', height:'500px' }}>
    <Typography variant='h2' sx={{color:'white', marginTop:'150px'}}> <b>See All Details : {service.name}</b> </Typography>
            </div>
    
    
<Container>
        <Typography paragraph>
            <Grid container spacing={2}>
                <Grid item xs={8} sm={7} mt={5}>
                    <img style={{ width: '100%' }} src={service.picture} alt="" />
                    
  <Stack spacing={1}>
                       <Rating sx={{color:'#512da8'}} name="half-rating"  defaultValue={service.rating} precision={0.5} readOnly />

                        </Stack>
         <Typography sx={{padding:'40px'}}>{service.about}</Typography>
                 <Typography variant='h4'>Some related Picture</Typography>
                    <Box>
                    <img style={{ width: '40%' }} src={service.picture1} alt="" />
                    <img style={{ width: '40%' }} src={service.picture2} alt="" />
                    
                    <img style={{ width: '40%' }} src={service.picture3} alt="" />
                    
                    <img style={{ width: '40%' }} src={service.picture4} alt="" />
               
                  

                    </Box>





                </Grid>
                <Grid item xs={4} sm={5}>
                  

                    <BookingService
                        service={service}

                    ></BookingService>
                
                </Grid>

            </Grid>
        </Typography>
        </Container>
        <Footer></Footer>
        </div>

    );
};

export default SingleService;