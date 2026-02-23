import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import { getContacts } from './services/contactService'
import ContactContextProvider from './Context/ContactContext'
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen'

function App() {

  return (
    <div>
      <ContactContextProvider>
      <Routes>
        <Route path='/' element = {<HomeScreen/>}/>
        <Route path='/contact/:contact_id' element = {<ContactScreen/>}/>
        <Route path='*' element = {<ErrorNotFoundScreen/>}/>
        <Route path='/profile' element = {<ProfileScreen/>}/>
      </Routes>
      </ContactContextProvider>
    </div>
  )
}

export default App