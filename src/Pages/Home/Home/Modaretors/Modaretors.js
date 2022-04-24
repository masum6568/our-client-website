import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShowModaretors from './ShowModaretors';

const Modaretors = () => {
    const [modaretors, setModaretors] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:7000/modaretor')
        .then(res => res.json())
        .then(data => setModaretors(data))
    },[])
    return (
        <div>
            <h2>Our Modaretors: {modaretors.length}</h2>
            <Container>
            <Grid container spacing={2}>
  {
      modaretors.map(modaretor => <ShowModaretors
      key={modaretor._id}
      modaretor={modaretor}
      ></ShowModaretors>)
  }
  
</Grid>  
            </Container>
        </div>
    );
};

export default Modaretors;