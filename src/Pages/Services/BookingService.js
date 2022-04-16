import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

import './BookingService.css'

const BookingService = ({ service }) => {
    const { name,  price, picture } = service || {};
    console.log(name, price, picture);
    const [selectedPackage, setPackage] = useState({});
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const { user } = UseAuth()
    const { _id } = useParams()
    const navigate = useNavigate();
   

    const initialInfo = { Name: user.displayName, email: user.email, phone: '' }
    const [bookingInformation, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInformation };
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo)
    }
    const handleBookingSubmit = (e) => {
        const bookingInfo = { ...bookingInformation, packageName: service.name, packageImg: service.picture, price: service.price, status: "pending" }
        console.log(bookingInfo);
        fetch('https://nameless-thicket-17201.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                }
            });
        console.log();
        e.preventDefault();
    }







    return (
  
        <div className='order' >
            <h2>Enter Your information</h2>
            <form onSubmit={handleBookingSubmit} >
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="Name"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="phone"
                    onBlur={handleOnBlur}
                    defaultValue="Phone Number"
                    size="small"
                />

                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>

    );
};

export default BookingService;



