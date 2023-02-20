import React from 'react';
import axios from 'axios';

export const contactsContext = React.createContext();

const INIT_STATE = {
  contacts: [],
  oneContact: null
};

function reducer(state=INIT_STATE, action) {
  switch(action.type) {
    case 'GET_CONTACTS':
      return { ...state, contacts: action.playload };
    case 'GET_ONE_CONTACT':
        return { ...state, oneContact: action.playload };
    default: 
      return INIT_STATE
  };
};

const ContactContextProvider = ({children}) => {

    const CONTACTS_API = 'http://localhost:8000/contacts';
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE)

    async function getContacts () {
      let res = await axios(CONTACTS_API);
      dispatch({
        type: 'GET_CONTACTS',
        playload: res.data
      })
    };

    async function createContact(newContact) {
      await axios.post(CONTACTS_API, newContact);
      getContacts()
    };

    async function getOneContact(id) {
      let res = await axios(`${CONTACTS_API}/${id}`);
      // console.log(res.data);
      dispatch({
        type: 'GET_ONE_CONTACT',
        playload: res.data
      })
    }

    async function updateContact (id, editedContact) {
      await axios.patch(`${CONTACTS_API}/${id}`, editedContact);
      getContacts()
    }

  return (
    <contactsContext.Provider value={{
        contacts: state.contacts,
        oneContact: state.oneContact,

        createContact,
        getContacts,
        getOneContact,
        updateContact
    }}>
        {children}
    </contactsContext.Provider>
  )
}

export default ContactContextProvider