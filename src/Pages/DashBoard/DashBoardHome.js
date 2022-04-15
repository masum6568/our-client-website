
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, IconButton } from '@mui/material';
import UserForm from '../Services/Testimonial/UserForm';

const DashBoardHome = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      fetch('http://localhost:7000/order')
          .then(res => res.json())
          .then(data => setProducts(data))
  })

  const handleDelete = id  => {
    const url = `http://localhost:7000/order/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount) {

                alert('Deleted')
                const remaining = products.filter(service => service._id !==  id);
                setProducts(remaining);

            }


        })




      }
    return (
<div>
<h1>Ordered Item: {products.length}</h1>
<Grid container spacing={2}>
  <Grid item xs={12} sm={5}>
    <UserForm></UserForm>
  </Grid>
  <Grid item xs={12} sm={7}>

  <TableContainer component={Paper} >
                <Table sx={{}} aria-label="car table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order Email</TableCell>
                            <TableCell align="right">Car Name</TableCell>
                            <TableCell align="right">Customer Name</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" style={{ marginRight: '40px' }}>
                                    {/* <img style={{ width: "5%" }} src={row.packageImg} alt="" /> */}
                                    {row.email}
                                </TableCell>
                                <TableCell align="right">{row.packageName}</TableCell>
                                <TableCell align="right">{row.Name}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right"> <IconButton aria-label="delete" onClick={() => handleDelete(row._id)}>
                                    <DeleteIcon />
                                </IconButton></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
 




  </Grid>
</Grid>
</div>
    );
};

export default DashBoardHome;