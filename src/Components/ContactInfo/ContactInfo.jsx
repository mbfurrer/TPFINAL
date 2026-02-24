import React from 'react'
import "./ContactInfo.css"


function ContactInfo({ contact, onClose }) {
  return (
    <div className="contact-info-page"
    onClick={onClose}
    >
      <div className="contact-info-panel"
      onClick={(e) => e.stopPropagation()}
      >

        <div className="info-header">
          <button 
          onClick={onClose} 
          className="close-btn">
            <i className="bi bi-x-lg"></i>
          </button>
          <h2>Info.</h2>
        </div>

        <div className="info-content">
          <img
            src={contact.profile_picture}
            alt={contact.name}
            className="info-avatar"
          />

          <h3>{contact.name}</h3>

          <div>
            <p className="info-phone"> 
              {contact.phone}</p>
          </div>

          <div className="info-search">
            <i class="bi bi-search"></i>
            <button className="label">Buscar mensajes</button>
          </div>

          <div className="info-section">
            <span className="label">About</span>
            <p>{contact.about || "Hey there! I'm using WhatsApp."}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactInfo