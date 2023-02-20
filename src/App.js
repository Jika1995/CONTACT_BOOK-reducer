import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AddContact from './components/AddContact/AddContact';
import ContactCard from './components/ContactCard/ContactCard';
import MainRoutes from './MainRoutes';

const App = () => {

  return (
    <div>
      <Navbar />
      <MainRoutes/>
      {/* <AddContact /> */}
      {/* <ContactCard /> */}
    </div>
  )
}

export default App