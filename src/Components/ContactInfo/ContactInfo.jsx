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
            <i className="bi bi-x-lg close-btn-desktop"></i>
            <i class="bi bi-arrow-left close-btn-mobile"></i>
          </button>

          <h2>Contact info.</h2>
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
            <button>Search</button>
          </div>
        </div>

        <div className='info-about-media'>
          <div className="info-about">
            <span>About</span>
            <p>{contact.about || "Hey there! I'm using WhatsApp."}</p>
          </div>

          <button className="info-options-card">
            <i className="bi bi-film"></i>
            Media, links and docs
          </button>

          <button className="info-options-card">
            <i className="bi bi-star"></i>
            Starred messages
          </button>

          <button className="info-options-card">
            <i class="bi bi-bell"></i>
            Mute notifications
          </button>

          <button className="info-options-card">
            <i class="bi bi-stopwatch"></i>
            Dissapearing messages
          </button>

          <button className="info-options-card">
            <i class="bi bi-shield-fill-check"></i>
            Advanced chat privacy
          </button>

          <button className="info-options-card">
            <i class="bi bi-lock"></i>
            Encription
          </button>

          <button className="info-options-card">
            <i class="bi bi-heart"></i>
            Add to favorites
          </button>

          <button className="info-options-card block-report">
            <i class="bi bi-ban"></i>
            Block {contact.name}
          </button>

          <button className="info-options-card block-report">
            <i class="bi bi-hand-thumbs-down"></i>
            Report {contact.name}
          </button>

          <button className="info-options-card block-report">
            <i class="bi bi-trash3"></i>
            Delete chat
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo