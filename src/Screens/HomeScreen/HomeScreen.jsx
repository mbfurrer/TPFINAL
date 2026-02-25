import React, { useContext, useState } from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import './HomeScreen.css'
import OptionSideBar from '../../Components/OptionSideBar/OptionSideBar'
import WelcomeSideBar from '../../Components/WelcomeSideBar/WelcomeSideBar'
import { ContactContext } from '../../Context/ContactContext'
import AddNewContact from "../../Components/AddNewContact/AddNewContact"
import ProfileScreen from '../../Components/ProfileScreen/ProfileScreen'


export default function HomeScreen() {

  const { contacts } = useContext(ContactContext)
  const chats = [...contacts]
  const [showNewContact, setShowNewContact] = useState(false)
  const [showProfile, setShowProfile] = useState(false)



  return (
    <div className='home-containter'>

      <div className='home-option-section'>
        <OptionSideBar
          onOpenProfile={() => setShowProfile(true)}
          onOpenContacts={() => setShowProfile(false)} />
      </div>

      <div className='home-contact-section'>
        {showProfile
          ? <ProfileScreen />
          : <ContactSideBar
            chats={chats}
            filter="all"
            setFilter={() => { }} />
        }
      </div>


      <div className='home-message-welcome-cont'>
        {showNewContact
          ? <AddNewContact onCancel={() => setShowNewContact(false)} />
          : <WelcomeSideBar onAddNewContact={() => setShowNewContact(true)} />
        }
      </div>
    </div>
  )
}