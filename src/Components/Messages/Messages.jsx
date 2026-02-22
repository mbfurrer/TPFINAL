import React from 'react'
import './Messages.css'

const Messages = ({ contact_selected }) => {
  return (
    <div className='message-sidebar-container'>
      {
        contact_selected.messages.map(message => {

          const isMine = message.send_by_me
          const isGroup = contact_selected.type === "group"

          return (
            <div key={message.id}
              className='messages-container'>

              <div
                className={`message ${isMine ? "mine" : "other"}`}>

                {isGroup && !isMine && (
                  <span className="sender-name">
                    {message.send_by}
                  </span>
                )}

                <p>{message.text}</p>
                <span className="time">{message.created_at}</span>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Messages
