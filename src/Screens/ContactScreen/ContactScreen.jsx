import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContactContext } from '../../Context/ContactContext'
import NewMessagesForm from '../../Components/NewMessageForm/NewMessageForm'
import Messages from '..//../Components/Messages/Messages'
import OptionSideBar from '../../Components/OptionSideBar/OptionSideBar'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'
import ProfileScreen from '../../Components/ProfileScreen/ProfileScreen'
import ContactHeader from '../../Components/ContactHeader/ContactHeader'
import WelcomeSideBar from '../../Components/WelcomeSideBar/WelcomeSideBar'
import AddNewContact from '../../Components/AddNewContact/AddNewContact'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
import './ContactScreen.css'


export default function ContactScreen({ onLogout }) {
  const { contacts } = useContext(ContactContext)
  const { contact_id } = useParams()

  const contact_selected = contacts.find(
    contact => Number(contact.id) === Number(contact_id))

  const [filter, setFilter] = useState("all")
  const [activeView, setActiveView] = useState("welcome")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  let currentView;

  if (activeView === "profile") {
    currentView = "profile";
  } else if (activeView === "add-contact") {
    currentView = "add-contact";
  } else if (activeView === "contact-info") {
    currentView = "contact-info";
  } else if (contact_selected) {
    currentView = "chat";
  } else {
    currentView = "welcome";
  }




  const chats = [...contacts]
  let filteredChats = chats

  if (filter === "unread") {
    filteredChats = chats.filter(chat =>
      chat.messages.some(msg => !msg.is_read && !msg.send_by_me))
  } else if (filter === "favorites") {
    filteredChats = chats.filter(chats => chats.favorite)
  } else if (filter === "groups") {
    filteredChats = chats.filter(chat => chat.type === "group")
  }

  return (
    <div className={`home-containter view-${activeView}`}>
      <div className='option-contact-section'>
        <OptionSideBar
          onOpenProfile={() => setActiveView("profile")}
          onOpenContacts={() => setActiveView("welcome")}
        />

        <div className='contactsidebar-active'>
          {activeView === "profile" ? (
            <ProfileScreen onClose={() => setActiveView("welcome")}/>
          ) : (
            <ContactSideBar
              chats={filteredChats}
              filter={filter}
              setFilter={setFilter}
              setActiveView={setActiveView}
              onLogout={onLogout}
            />
          )}
        </div>

        <div className='home-message-welcome-cont'>
          {activeView === "add-contact" && (
            <AddNewContact
              onClose={() => setActiveView("welcome")}
            />
          )}

          {activeView === "contact-info" && contact_selected && (
            <ContactInfo
              contact={contact_selected}
              onClose={() => setActiveView("welcome")}
            />
          )}


          {activeView === "chat" && contact_selected && (
            <>
              <ContactHeader
                onShowContactInfo={() => setActiveView("contact-info")}
                onClose={() => {
                  setActiveView("welcome")
                }}
              />
              <div className='messages-scroll-area'>
                <Messages contact_selected={contact_selected} />
              </div>
              <NewMessagesForm contact_id={contact_id} />
            </>
          )}

          {activeView === "welcome" && (
            <WelcomeSideBar
              onAddNewContact={() => setActiveView("add-contact")}
            />
          )}
        </div>
      </div>
    </div>
  )
}