import React, { useContext } from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import { useParams } from 'react-router'
import { ContactContext } from '../../Context/ContactContext'
import './ContactScreen.css'
import NewMessagesForm from '../../Components/NewMessageForm/NewMessageForm'
import Messages from '..//../Components/Messages/Messages'

export default function ContactScreen() {
  const { contacts } = useContext(ContactContext)
  const { contact_id } = useParams()
  const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))

  return (
    <div className='contact-message-container'>
      <ContactSideBar />{
        !contact_selected
          ? <div>
            <h1>El contacto seleccionado no existe</h1>
          </div>

          : <div className='message-sidebar'>
            <div className='message-header'>
              <img
                className='avatar'
                src={contact_selected.profile_picture}
                alt={contact_selected.name} />
              <div className="header-info">
                <h1>{contact_selected.name}</h1>
                <span className="last-seen">
                  {contact_selected.last_time_connection}
                </span>
              </div>
            </div>
            <Messages contact_selected = {contact_selected}/>
            <NewMessagesForm contact_id = {contact_id}/>
          </div>
      }
    </div>
  )
}