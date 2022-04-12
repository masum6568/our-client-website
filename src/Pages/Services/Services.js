import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';



import ServicesCard from './ServiceCard';



const Services = () => {

    const [cycle, setCycle] = useState([]);
    useEffect(() => {
        fetch('./fakadata.json')
            .then(res => res.json())
            .then(data => setCycle(data))
    }, [])

    return (

        <>
            <Container>
                <Box sx={{ flexGrow: 1 }} style={{ marginTop: '20px', paddingBottom: '50px' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            cycle.map(article => <Grid item xs={2} sm={4} md={4}>
                                <ServicesCard article={article}></ServicesCard>

                            </Grid>)
                        }

                    </Grid>
                </Box>
            </Container>
          

        </>



    );
};

export default Services;