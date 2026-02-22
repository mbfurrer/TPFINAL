import React from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import './HomeScreen.css'
import OptionSideBar from '../../Components/OptionSideBar/OptionSideBar'
import WelcomeSideBar from '../../Components/WelcomeSideBar/WelcomeSideBar'

export default function HomeScreen() {
  return (
    <div className='home-containter'>
      <div>
        <OptionSideBar />
      </div>

      <div className='contact-sidebar'>
        <ContactSideBar />
      </div>

      <div className='message-sidebar'>
        <WelcomeSideBar />
      </div>
    </div>
  )
}