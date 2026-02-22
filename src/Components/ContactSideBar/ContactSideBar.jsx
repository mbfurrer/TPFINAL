import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import { Link } from 'react-router'
import { getContacts } from '../../services/contactService'
import './ContactSideBar.css'

export default function ContactSideBar({ chats, filter, setFilter }) {

  const { contacts } = useContext(ContactContext)
  
  return (

    <div className='contact-sidebar-column'>

      <div className='logo-container'>
        <h1>WhatsApp</h1>

        <div className='logo-container-options'>
          <button> <i className="bi bi-chat-left"></i> </button>
          <button> <i className="bi bi-three-dots-vertical"></i> </button>
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
        <button 
        onClick={() => setFilter("all")} 
        className={`filter-btn ${filter === "all" ? "active" : ""}`}>
          All
        </button>

        <button 
        onClick={() => setFilter("unread")}
        className={`filter-btn ${filter === "unread" ? "active" : ""}`}>
          Unread
        </button>
        
        <button 
        onClick={() => setFilter("favorites")} 
        className={`filter-btn ${filter === "favorites" ? "active" : ""}`}>
        Favorites
        </button>
        
        <button onClick={() => setFilter("groups")} 
          className={`filter-btn ${filter === "groups" ? "active" : ""}`}>
          Groups
        </button>
      </div>

      <div>{
        chats.map(
          (chat) => {

            const lastMessage =
              chat.messages[chat.messages.length - 1];

            const unreadCount =
              chat.messages.filter(
                msg => !msg.is_read && !msg.send_by_me
              ).length;

            return (
              <Link
                to={`/contact/${chat.id}`}
                key={chat.id}>
                <div className='contact-card'>
                  <img
                    src={chat.profile_picture}
                    alt={chat.name}
                    className="avatar"
                  />
                  <div className="contact-info">
                    <div className="top-row">
                      <h3 className={`contact-name ${unreadCount > 0 ? "unread" : ""}`}>
                        {chat.name}
                      </h3>
                      <span className="time">{chat.last_time_connection}</span>
                    </div>

                    <div className="bottom-row">
                      <p>
                        {lastMessage?.send_by_me ? "Tú" : ""} 
                        {lastMessage?.text}
                      </p>

                      {unreadCount > 0 && 
                      <span className="unread-count">
                          {unreadCount}
                        </span>
                      }
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