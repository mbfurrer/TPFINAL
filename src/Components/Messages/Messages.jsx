import React from 'react'
import './Messages.css'

const Messages = ({ contact_selected }) => {
  return (
    <div className='message-sidebar-container'>
      {
        contact_selected.messages.map(message => {
          return (
            <div className='messages-container'>
              <div key={message.id}
                className={`message ${message.send_by_me ? "mine" : "other"}`}>
                <p>{message.text}</p>
                <span>{message.created_at}</span>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Messages
