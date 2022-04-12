import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';









const Booking = ({ example }) => {
    const { name, about } = example;




    return (
        <>

            <Grid item xs={12} sm={6} md={4}  >
                <Paper elevation={3} sx={{ py: 5 ,background: 'rgba(10,10,10,.6)', color: 'white'}} >
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {about}
                    </Typography>


                </Paper>



            </Grid>









        </>
    );
};

export default Booking;