import React from 'react'
import "./OptionSideBar.css"

export default function OptionSideBar() {
    return (
        <div className='options-sidebar'>
            <div>
                <button aria-label='Chats'>
                    <i className="bi bi-chat-left-dots"></i>
                </button>
                <button aria-label='Status'>
                    <i className="bi bi-chat-quote"></i>
                </button>
                <button aria-label='Channel'>
                    <i className="bi bi-chat-text"></i>
                </button>
                <button aria-label='Communities'>
                    <i className="bi bi-people"></i>
                </button>
            </div>

            <div>
                <button aria-label='Media'>
                    <i className="bi bi-film"></i>
                </button>
                <button aria-label='Settings'>
                    <i className="bi bi-gear"></i>
                </button>
                <button aria-label='Profile'>
                    <i className="bi bi-person-circle"></i>
                </button>
            </div>
        </div>
    )
}
