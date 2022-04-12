import React, { } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';





// import './ServicesCard.css'
import { Button, Grid, Rating, Stack } from '@mui/material';
import { Link } from 'react-router-dom';


const ServicesCard = ({ article }) => {
    const { _id, name, about, picture, price, rating } = article
    // console.log(props.article);
    return (
        <>
            <Grid >
                <Card sx={{ maxWidth: 345 }}  >
                    {/* <CardHeader style={{ backgroundColor: '#bdbdbd' }}
                        avatar={
                            <Avatar aria-label="recipe">
                                <img style={{ width: '70px' }} src="https://www.kreedon.com/wp-content/uploads/2022/03/thumb-1920-549198-2.jpg" alt="" />
                            </Avatar>
                        }


                        // title={name}
                        subheader="Welcome"
                    /> */}
                    <CardMedia
                        component="img"
                        height="194"
                        image={picture}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography
                            variant="body2" color="text.secondary" style={{ color: 'black', paddingBottom: '5px' }}>
                            Brand Name :  {name}
                        </Typography>
                        <Typography
                            variant="body2" color="text.secondary">
                            Description : {about}
                        </Typography>
                        <Typography
                            variant="body2" color="text.secondary"
                            style={{ color: 'black', paddingTop: '5px' }}
                        >
                            Price : {price}
                        </Typography>
                        <Stack spacing={1} style={{ marginLeft: '95px' }}>
                            <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly />

                        </Stack>
                    </CardContent>

                    <Stack spacing={2}>
                        <Link
                            style={{ textDecoration: 'none', display: "block", paddingBottom: "40px" }}
                            to={`/details/${_id}`}>
                            <Button variant="contained">Order Now</Button>
                        </Link>
                    </Stack>
                </Card>
            </Grid>

        </>

    )

};

export default ServicesCard;

/*https://www.kreedon.com/wp-content/uploads/2022/03/thumb-1920-549198-2.jpg  */