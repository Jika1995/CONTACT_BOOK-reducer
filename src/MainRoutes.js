import React from 'react';
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';
import ContactList from './components/ContactList/ContactList';
import {Routes, Route} from 'react-router-dom';
import ContactContextProvider from './contactContext';

const MainRoutes = () => {
  return (
    <ContactContextProvider>
        <Routes>
            <Route path='/' element={<ContactList/>}/>
            <Route path='/add' element={<AddContact />}/>
            <Route path='/edit/:id' element={<EditContact/>}/>
        </Routes>
    </ContactContextProvider>
  )
};

export default MainRoutes