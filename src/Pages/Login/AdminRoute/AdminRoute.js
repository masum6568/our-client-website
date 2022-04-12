import React from 'react';
import { CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from '../../../Hooks/UseAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user,admin, isLoading } = UseAuth();
    let location = useLocation();
    if (isLoading) { return <CircularProgress></CircularProgress> }
    if (user.email && admin) {
        return children;
    }

    return <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;