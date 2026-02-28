import React, { useContext, useState } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import EmojiPicker from "emoji-picker-react";
import './NewMessageForm.css'


const NewMessagesForm = ({ contact_id }) => {

  const { addNewMessage } = useContext(ContactContext)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("")
  const onEmojiClick = (emojiData) => {
    setMessage(prev => prev + emojiData.emoji);
  };


  function handleSubmitNewMessage(event) {
    event.preventDefault()

    const trimmed = message.trim()
    if (!trimmed) return



    addNewMessage(contact_id, trimmed)
    setMessage("")
  }

  return (
    <div className='chat-area'>
      <form onSubmit={handleSubmitNewMessage} className="chat-input">
        <div className="input-wrapper">
          <label htmlFor='nuevo-mensaje'></label>

          <button
            type="button"
            className="emoji-btn"
            onClick={() => setShowEmojiPicker(prev => !prev)}
          >
            <i className="bi bi-emoji-smile"></i>
          </button>

          {showEmojiPicker && (
            <div className="emoji-picker-container">
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                previewConfig={{ showPreview: false }}
                skinTonesDisabled
                searchDisabled
              />
            </div>
          )}

          < button type='submit'
            className='send-btn'>
            <i className="bi bi-send-fill"></i>
          </button>

          <textarea
            placeholder="Escribe un mensaje..."
            id='nuevo_mensaje'
            value={message}
            name='nuevo_mensaje'
            rows={1}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmitNewMessage(e)
              }
            }}
          />

        </div>
      </form >
    </div >
  )
}

export default NewMessagesForm