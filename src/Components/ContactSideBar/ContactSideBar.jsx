import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import { Link } from 'react-router'
import { getContacts } from '../../services/contactService'


export default function ContactSideBar() {

    const {contacts, favorite_name} = useContext(ContactContext)
    
    return (
    <div>
        <h2>Whatsapp Clone</h2>
        <h3>Me cae muy bien: {favorite_name}</h3>
        <div>{
            contacts.map(
                (contact) => {
                    return( 
                        <Link 
                        to={`/contact/${contact.id}`}
                        key={contact.id}>
                        <img 
                        src={contact.profile_picture}
                        alt={contact.name}
                        style={
                                {
                                width: '200px'
                                }
                            }
                        />
                        <h3>{contact.name}</h3>
                        <span>{contact.last_time_connection}</span>
                        <br />
                        <hr />
                        </Link>
                    )
                }
            )
            }
        </div>
    </div>
    )
}