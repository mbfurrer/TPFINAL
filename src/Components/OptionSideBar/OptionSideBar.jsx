import React, { useContext } from 'react'
import "./OptionSideBar.css"
import { ContactContext } from '../../Context/ContactContext'

export default function OptionSideBar({onOpenProfile, onOpenContacts}) {

    const { profile } = useContext(ContactContext)

    return (
        <div className='options-sidebar'>
            <div>
                <button onClick={onOpenContacts}
                title='Chats'>
                    <i className="bi bi-chat-left-dots"></i>
                </button>
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

                    <button onClick={onOpenProfile}
                        title='Profile'>
                            <img className='opt-profile-avatar'
                            src={profile.profile_picture}
                            alt="profile"
                        />
                        </button>
            </div>
        </div>
    )
}
