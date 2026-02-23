import React , { useContext, useState } from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import './HomeScreen.css'
import OptionSideBar from '../../Components/OptionSideBar/OptionSideBar'
import WelcomeSideBar from '../../Components/WelcomeSideBar/WelcomeSideBar'
import { ContactContext } from '../../Context/ContactContext'
import AddNewContact from "../../Components/AddNewContact/AddNewContact"


export default function HomeScreen() {
  
  const { contacts } = useContext(ContactContext)
  const chats = [...contacts]
  const [showNewContact, setShowNewContact] = useState(false)

  return (
    <div className='home-containter'>
      <div>
        <OptionSideBar />
      </div>

      <div>
        <ContactSideBar
        chats={chats}      
        filter="all"
        setFilter={() => {}}/>
      </div>

      <div className='message-sidebar'>
        {showNewContact
        ? <AddNewContact onCancel={() => setShowNewContact(false)} />
        : <WelcomeSideBar onAddNewContact={() => setShowNewContact(true)}/>
        }
      </div>
    </div>
  )
}