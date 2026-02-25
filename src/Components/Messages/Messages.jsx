import React, { useEffect, useRef } from 'react'
import './Messages.css'
import NewMessagesForm from '../../Components/NewMessageForm/NewMessageForm'

const Messages = ({ contact_selected }) => {
const containerRef = useRef(null) 

useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth"
    })
  }, [contact_selected.messages.length])


  return (

    <div className='message-sidebar-container'>
      <div
        ref={containerRef}
        className='messages-container'>

        {
          contact_selected.messages.map(message => {

            const isMine = message.send_by_me
            const isGroup = contact_selected.type === "group"

            return (
              <div key={message.id}
                className={`message ${isMine ? "mine" : "other"}`}
              >
                {isGroup && !isMine && (
                  <span className="sender-name">
                    {message.send_by}
                  </span>
                )}

                <p>{message.text}</p>
                <span className="time">{message.created_at}</span>
              </div>)
          })}            
          </div>

    </div>
  )
}

export default Messages
