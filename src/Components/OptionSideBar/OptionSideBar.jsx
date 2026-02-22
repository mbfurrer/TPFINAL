import React from 'react'
import "./OptionSideBar.css"

export default function OptionSideBar() {
    return (
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
    )
}
