import React from 'react'
import { Route, Routes } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import ContactContextProvider from './Context/ContactContext'

function App() {

  return (
    <div>
      <ContactContextProvider>
      <Routes>
        <Route path='/' element = {<ContactScreen/>}/>
        <Route path='/contact/:contact_id' element = {<ContactScreen/>}/>
        <Route path='*' element = {<ErrorNotFoundScreen/>}/>
      </Routes>
      </ContactContextProvider>
    </div>
  )
}

export default App