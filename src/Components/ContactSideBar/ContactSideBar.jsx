import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'
import './ContactSideBar.css'
import DropMenu from '../../Components/DropMenu/DropMenu'


export default function ContactSideBar({ chats = [], filter, setFilter, setActiveView, onLogout }) {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const displayedChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )


  return (


    <div className='contact-sidebar-column'>

      <div className='logofilter-section'>
        <div className='logo-container'>
          
            
            <h1 className='desktop-logo'>WhatsApp</h1>


          <div className='logo-container-options'>
            <button className='menu-logo-btn '>
              <i className="bi bi-chat-left"></i> </button>
            <DropMenu
              onAddNewContact={() => setActiveView("add-contact")}
              onOpenProfile={() => setActiveView("profile")}
              onLogout={onLogout}
            />
          </div>
        </div>

        <div className="search-bar">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search or start a new chat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
      </div>

      <div className='displayed-chats-bar'>{
        displayedChats.map(
          (chat) => {

            const lastMessage =
              chat.messages[chat.messages.length - 1];

            const unreadCount =
              chat.messages.filter(
                msg => !msg.is_read && !msg.send_by_me
              ).length;

            return (
              <div
                key={chat.id}
                className='contact-card'
                onClick={() => {
                  navigate(`/contact/${chat.id}`)
                  setActiveView("chat")
                }}>
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
                        {lastMessage?.send_by_me ? "Tú: " : ""}
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
            )
          })}
      </div>
    </div>
  )
}