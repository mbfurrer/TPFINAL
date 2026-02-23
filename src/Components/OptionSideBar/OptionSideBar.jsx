import React, { useContext, useState } from 'react'
import "./OptionSideBar.css"
import { Link } from 'react-router';
import { ContactContext } from '../../Context/ContactContext'

export default function OptionSideBar() {

    const { profile } = useContext(ContactContext)


    return (
        <div className='options-sidebar'>
            <div>
                <Link to="/">
                <button title='Chats'>
                    <i className="bi bi-chat-left-dots"></i>
                </button>
                </Link>
                <button title='Status'>
                    <i className="bi bi-chat-quote"></i>
                </button>
                <button title='Channel'>
                    <i className="bi bi-chat-text"></i>
                </button>
                <button title='Communities'>
                    <i className="bi bi-people"></i>
                </button>
            </div>

            <div>
                <button title='Media'>
                    <i className="bi bi-film"></i>
                </button>
                <button title='Settings'>
                    <i className="bi bi-gear"></i>
                </button>
                <Link to="/profile"> 
                    <button 
                        title='Profile'>
                            <img className='opt-profile-avatar'
                            src={profile.profile_picture}
                            alt="profile"
                        />
                        </button>
                </Link>
            </div>
        </div>
    )
}
