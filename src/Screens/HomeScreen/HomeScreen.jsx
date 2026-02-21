import React from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import './HomeScreen.css'

export default function HomeScreen() {
    return (
        <div className='home-containter'>
            <div className='options-sidebar'>
                <div>
                    <button aria-label='Chats'>
                        <i class="bi bi-chat-left-dots"></i>
                    </button>
                    <button aria-label='Status'>
                        <i class="bi bi-chat-quote"></i>
                    </button>
                    <button aria-label='Channel'>
                        <i class="bi bi-chat-text"></i>
                    </button>
                    <button aria-label='Communities'>
                        <i class="bi bi-people"></i>
                    </button>
                </div>

                <div>
                    <button aria-label='Media'>
                        <i class="bi bi-film"></i>
                    </button>
                    <button aria-label='Settings'>
                        <i class="bi bi-gear"></i>
                    </button>
                    <button aria-label='Profile'>
                        <i class="bi bi-person-circle"></i>
                    </button>
                </div>

            </div>
            <div className='contact-sidebar'>
            <ContactSideBar />
            </div>
            <div className='message-sidebar'>
                <div className='download-card'>
                    <h1>Download WhatsApp for Windows</h1>
                    <span>Make calls, share your screen and get a faster experience when you download the Windows app.</span>
                    <button>Download</button>
                </div>
                    <button>
                        <i class="bi bi-file-earmark-text"></i>
                        <span>Send document</span>
                    </button>
                    <button>
                        <i class="bi bi-person-plus"></i>
                        <span></span>
                    </button>
                </div>
        </div>
    )
}