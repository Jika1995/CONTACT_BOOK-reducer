import React from 'react';
import {useContext, useEffect, useState} from 'react';
import { contactsContext } from '../../contactContext';
import { useNavigate, useParams } from 'react-router-dom';

import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { lightBlue } from '@mui/material/colors';
import {blue} from '@mui/material/colors';
import { Button } from '@mui/material';


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

const EditContact = () => {

  const { getOneContact, oneContact, updateContact } = useContext(contactsContext);

  const [editedContact, setEditedContact] = useState(oneContact);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

 useEffect(() => {
    getOneContact(id)
  }, []);

  useEffect(() => {
    setEditedContact(oneContact)
  }, [oneContact, ]);

  const handleInput = e => {
    e.preventDefault();

    let contactObj = {
      ...oneContact,
      [e.target.name]: e.target.value
    };

    setEditedContact(contactObj);
  };

  function saveChanges () {

    for (let key in editedContact) {
      if(!editedContact[key]) {
        alert('Some inputs are empty');
        return
      }
    };

    updateContact(id, editedContact);

    navigate('/');

  };

  return editedContact ? (
    <div>
      <FormControlUnstyled>
      <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Enter Contact info</h2>
          <TextField id="outlined-basic" label="Controlled" variant="outlined" size='small' sx={{m: 0.5, width: '30%', color: 'white'}} value={editedContact.name} name='name' onChange={handleInput}/>
          <TextField id="outlined-basic2" label="Controlled" variant="outlined" size='small' sx={{m: 0.5, width: '30%'}}  value={editedContact.surname} name='surname' onChange={handleInput}/>
          <TextField id="outlined-basic3" label="Controlled" variant="outlined" size='small' sx={{m: 0.5, width: '30%'}}  value={editedContact.phoneNumber} name='phoneNumber' onChange={handleInput}/>
          <TextField id="outlined-basic3" label="Controlled" variant="outlined" size='small' sx={{m: 0.5, width: '30%'}}  value={editedContact.image} name='image' onChange={handleInput}/>
        <Button variant="contained" sx={{background: lightBlue[200]}} onClick={saveChanges}>Save Changes</Button>
        </Box>
      </FormControlUnstyled>
    </div>
  ) : (
    <h2>Loading...</h2>
  )
}

export default EditContact