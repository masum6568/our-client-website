import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddModaretor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 

const [image, setImage] = useState(null);
const [success, setSuccess] = useState(false);

const handleSubmit = e =>{
    e.preventDefault();
    if(!image){
        return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image);

    fetch('http://localhost:7000/modaretor', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
    if(data.insertedId){
        setSuccess('modaretor addedd successfully');
        console.log('modaretor addedd successfully')
    }
      })
      .catch(error => {
        console.error('Error:', error);
      });
}


    return (
        <div>
            <h3>Add a Modaretor</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                sx={{width:'50%'}}
                label='Name'
                required
                onChange={e => setName(e.target.value)}
                 variant='standard'/>
                 <br />
                <TextField 
                sx={{width:'50%'}}
                type='email'
                label='Email'
                required
                onChange={e => setEmail(e.target.value)}
                 variant='standard'/>
                 <br />

  <Input accept="image/*"
  type="file"
  onChange={e => setImage(e.target.files[0])}
  />
  <br />
  <Button variant="contained" type="submit">
    Add Modaretor
  </Button>

            </form>
            {success && <p style={{color:'green'}}>{success}</p>}
        </div>
    );
};

export default AddModaretor;