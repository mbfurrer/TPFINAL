import React, { useContext } from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import { useParams } from 'react-router'
import { ContactContext } from '../../Context/ContactContext'
import './ContactScreen.css'

export default function ContactScreen() {
  const {contacts} = useContext (ContactContext)
  const {contact_id} = useParams()
  const contact_selected = contacts.find (contact => Number(contact.id) === Number(contact_id))

  return (
    <div className='contact-message-container'>
      <ContactSideBar/>{
        ! contact_selected
        ? <div>
          <h1>El contacto seleccionado no existe</h1>
          </div>
          
        : <div className='message-sidebar'>
          <div className='message-header'>
            <img src={contact_selected.profile_picture} alt={contact_selected.name}/>
            <h1>{contact_selected.name}</h1>
          </div>
            <div> 
            {
            contact_selected.messages.map(message => {
              return (
                <div key={message.id} 
                className={`message ${message.send_by_me ? "mine" : "other"}`}>
                  <p>{message.text}</p>
                  <span>{message.created_at}</span>
                </div>
                )
              })}            
          </div>
          
          <form>
            <textarea placeholder="Escribe un mensaje..."/>
            <button type='submit'>Enviar</button>
          </form>

    </div>
    }
    </div>
  )
}