import React, { useContext } from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import { useParams } from 'react-router'
import { ContactContext } from '../../Context/ContactContext'
import './ContactScreen.css'
import NewMessagesForm from '../../Components/NewMessageForm/NewMessageForm'
import Messages from '..//../Components/Messages/Messages'
import OptionSideBar from '../../Components/OptionSideBar/OptionSideBar'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'

export default function ContactScreen() {
  const { contacts } = useContext(ContactContext)
  const { contact_id } = useParams()
  const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))

  const chats = [...contacts]

  const [filter, setFilter] = React.useState("all")
  let filteredChats = chats
  if (filter === "unread") {
    filteredChats = chats.filter(chat =>
      chat.messages.some(msg => !msg.is_read && !msg.send_by_me)
    )
  } else if (filter === "favorites") {
    filteredChats = chats.filter(chats => chats.favorite)
  } else if (filter === "groups") {
    filteredChats = chats.filter(chat => chat.type === "group")
  }

  const [showContactInfo, setShowContactInfo] = React.useState(false)
  React.useEffect(() => {
  setShowContactInfo(false)
}, [contact_selected])


  return (
    <div className='contact-message-container'>
      
      <div className='home-option-section'>
      <OptionSideBar />
      </div>

      <div className='home-contact-section'>
      <ContactSideBar
        chats={filteredChats}
        filter={filter}
        setFilter={setFilter}
      />
      </div>


      {!contact_selected
        ? <div>
          <h1>El contacto seleccionado no existe</h1>
        </div>
        : <div className='cs-message-sidebar'>

          {showContactInfo
            ? (<ContactInfo
              contact={contact_selected}
              onClose={() => setShowContactInfo(false)} />)
            : (
              <>
                <div className='cs-message-header'>
                  <button onClick={() => setShowContactInfo(true)}>
                    <img
                      className='avatar'
                      src={contact_selected.profile_picture}
                      alt={contact_selected.name} />
                  </button>

                  <div className="cs-header-info">
                    <h1>{contact_selected.name}</h1>
                    <span className="last-seen">
                      {contact_selected.last_time_connection}
                    </span>
                  </div>
                </div>



                <div className='chat-screen'>
                  <Messages contact_selected={contact_selected} />
                  <NewMessagesForm contact_id={contact_id} />
                </div>
              </>
            )}
        </div>}
    </div>
  )
}