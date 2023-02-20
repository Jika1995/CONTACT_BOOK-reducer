import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import {useContext, useEffect} from 'react';
import { contactsContext } from '../../contactContext';
import { Box } from '@mui/material';

const ContactList = () => {

  const { contacts, getContacts} = useContext(contactsContext);

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '80%', m: 'auto', mt: 2, mb: 2}} >
      {contacts.map(item => (
        <ContactCard key={item.id} item={item}/>
      ))}
    </Box>
  )
}

export default ContactList