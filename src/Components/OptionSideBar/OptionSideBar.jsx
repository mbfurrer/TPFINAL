import React from 'react'
import "./OptionSideBar.css"

export default function OptionSideBar() {
    return (
        <div className='options-sidebar'>
            <div>
                <button title='Chats'>
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
                <button title='Profile'>
                    <i className="bi bi-person-circle"></i>
                </button>
            </div>
        </div>
    )
}
