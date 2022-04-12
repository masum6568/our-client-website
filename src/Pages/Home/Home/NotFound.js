import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{width:'100%'}} src="https://i.redd.it/x1sr1lob3ai41.jpg" alt="" />
            <h2>This is not found page</h2>
            <NavLink to="/home"><Button>Back To Home</Button></NavLink>
        </div>
    );
};

export default NotFound;