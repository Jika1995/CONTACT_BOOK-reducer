import React, {useContext} from 'react';
import { Button } from '@mui/material';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { lightBlue } from '@mui/material/colors';
import {blue} from '@mui/material/colors';
import {contactsContext} from '../../contactContext';
import {Grid} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: blue[300],
  border: '2px solid #fff',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  color: 'white',
};

const AddContact = () => {

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const { createContact } = useContext(contactsContext);

  const INIT_STATE = {
    name: '',
    surname: '',
    phoneNumber: '',
    image: ''
  };

  const [contact, setContact] = useState(INIT_STATE);

  function handleSubmit(e) {
    e.preventDefault();

    let newContact = {
      ...contact,
      [e.target.name]: e.target.value
    };

    setContact(newContact);
  };

  function saveContact () {
    createContact(contact);
    setContact({
      name: '',
      surname: '',
      phoneNumber: '',
      image: ''
    });

    alert('Your contact successfully saved!')

    handleClose()
  };

  return (
    <div>
      <Grid container justifyContent = "center">
        <Button onClick={handleOpen}>Add Contact</Button>
      </Grid>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Enter Contact info</h2>
          <TextField id="outlined-basic" label="Name" variant="outlined" size='small' sx={{m: 0.5, width: '30%', color: 'white'}} value={contact.name} name='name' onChange={handleSubmit}/>
          <TextField id="outlined-basic2" label="Surname" variant="outlined" size='small' sx={{m: 0.5, width: '30%'}}  value={contact.surname} name='surname' onChange={handleSubmit}/>
          <TextField id="outlined-basic3" label="Phone Number" variant="outlined" size='small' sx={{m: 0.5, width: '30%'}}  value={contact.phoneNumber} name='phoneNumber' onChange={handleSubmit}/>
          <TextField id="outlined-basic3" label="Image" variant="outlined" size='small' sx={{m: 0.5, width: '30%'}}  value={contact.image} name='image' onChange={handleSubmit}/>
        <Button variant="contained" sx={{background: lightBlue[200]}} onClick={saveContact}>Add</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default AddContact