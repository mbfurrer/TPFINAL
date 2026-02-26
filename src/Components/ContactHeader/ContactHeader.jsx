import { useContext } from 'react'
import { useParams } from 'react-router'
import { ContactContext } from '../../Context/ContactContext'
import { useNavigate } from "react-router";
import "./ContactHeader.css"


export default function ContactHeader({ onShowContactInfo }) {
  const { contacts } = useContext(ContactContext)
  const { contact_id } = useParams()
  const navigate = useNavigate();
  const contact_selected = contacts.find(
    contact => Number(contact.id) === Number(contact_id)
  )
    if (!contact_selected) return null

  return (
    <div className='cs-message-header'>

      <button className='mobile-back-btn'
      onClick={() => navigate("/")}>
        <i className="bi bi-arrow-left"></i>
      </button>

      <button onClick={onShowContactInfo}>
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
  )
}
