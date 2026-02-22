import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import { Link } from 'react-router'
import { getContacts } from '../../services/contactService'
import './ContactSideBar.css'
import OptionSideBar from '../OptionSideBar/OptionSideBar'

export default function ContactSideBar() {

  const { contacts, favorite_name } = useContext(ContactContext)

  return (

    <div className='contact-sidebar-column'>

      <div className='logo-container'>
        <h1>WhatsApp</h1>

        <div className='logo-container-options'>
          <button> <i class="bi bi-chat-left"></i> </button>
          <button> <i class="bi bi-three-dots-vertical"></i> </button>
        </div>
      </div>

      <div className="search-bar">
        <i className="bi bi-search"></i>
        <input
          type="text"
          placeholder="Search or start a new chat"
        />
      </div>

      <div className="filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Unread</button>
        <button className="filter-btn">Favorites</button>
        <button className="filter-btn">Groups</button>
      </div>

      <div>{
        contacts.map(
          (contact) => {

            const lastMessage =
              contact.messages[contact.messages.length - 1];

            const unreadCount =
              contact.messages.filter(
                msg => !msg.is_read && !msg.send_by_me
              ).length;

            return (
              <Link
                to={`/contact/${contact.id}`}
                key={contact.id}>
                <div className='contact-card'>
                  <img
                    src={contact.profile_picture}
                    alt={contact.name}
                    className="avatar"
                  />
                  <div className="contact-info">
                    <div className="top-row">
                      <h3 className={`contact-name ${unreadCount > 0 ? "unread" : ""}`}>
                        {contact.name}
                      </h3>
                      <span className="time">{contact.last_time_connection}</span>
                    </div>

                    <div className="bottom-row">
                      <p>{lastMessage?.send_by_me && "Tú: "}
                        {lastMessage?.text}
                      </p>
                      {unreadCount > 0 && (
                        <span className="unread-count">
                          {unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            )
          }
        )
      }
      </div>
    </div>
  )
}