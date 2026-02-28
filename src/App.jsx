import React, { useState }  from 'react'
import { Route, Routes, Navigate } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import ContactContextProvider from './Context/ContactContext'

function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  return (
    <div>
      <ContactContextProvider>
      <Routes>

        <Route
          path="/login"
          element={
            <LoginScreen onLogin={() => setIsAuthenticated(true)} />
          }
        />

        <Route
          path="/"
          element={
            isAuthenticated ? (
              <ContactScreen onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/login"/>
            )
          }
        />
        
        <Route
          path="/contact/:contact_id"
          element={
            isAuthenticated ? (
              <ContactScreen
                onLogout={() => setIsAuthenticated(false)}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />


        <Route 
        path='*' 
        element = {<ErrorNotFoundScreen/>}
        />    
        
      </Routes>
      </ContactContextProvider>
    </div>
  )
}

export default App