import { Grid, Typography } from '@mui/material';
import React from 'react';

const ShowModaretors = ({modaretor}) => {
    const {name, image} = modaretor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img style={{width:'200px', height:'200px'}} src={`data:image/png;base64,${image}`} alt="" />
<Typography variant='h3'>{name}</Typography>
  </Grid>
    );
};

export default ShowModaretors;