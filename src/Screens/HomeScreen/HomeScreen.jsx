import React , { useContext } from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import './HomeScreen.css'
import OptionSideBar from '../../Components/OptionSideBar/OptionSideBar'
import WelcomeSideBar from '../../Components/WelcomeSideBar/WelcomeSideBar'
import { ContactContext } from '../../Context/ContactContext'


export default function HomeScreen() {

  const { contacts } = useContext(ContactContext)
  const chats = [...contacts]

  return (
    <div className='home-containter'>
      <div>
        <OptionSideBar />
      </div>

      <div className='contact-sidebar'>
        <ContactSideBar
        chats={chats}      
        filter="all"
        setFilter={() => {}}/>
      </div>

      <div className='message-sidebar'>
        <WelcomeSideBar />
      </div>
    </div>
  )
}