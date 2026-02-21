import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import { Link } from 'react-router'
import { getContacts } from '../../services/contactService'
import './ContactSideBar.css'

export default function ContactSideBar() {

    const {contacts, favorite_name} = useContext(ContactContext)
    
    return (
    <div className='contact-sidebar-column'>
        <h2>Whatsapp</h2>
        <h3>Favoritos: {favorite_name}</h3>
        <div>{
            contacts.map(
                (contact) => {
                    
                    const lastMessage =
                    contact.messages[contact.messages.length - 1];

                    const unreadCount =
                        contact.messages.filter(
                            msg => !msg.is_read && !msg.send_by_me
                        ).length;
                    
                    return( 
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
                                <h3>{contact.name}</h3>
                                <span className="time">{contact.last_time_connection}</span>
                            </div>

                            <div className="bottom-row">
                                <p>{lastMessage?.send_by_me && "Tú: "}
                                {lastMessage?.text}
                                </p>
                                        {unreadCount > 0 && (
                                            <span className="unread">
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