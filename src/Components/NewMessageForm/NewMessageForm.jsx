import React, { useContext } from 'react'
import './NewMessageForm.css'
import { ContactContext } from '../../Context/ContactContext'

const NewMessagesForm = ({contact_id}) => {

    const {addNewMessage} = useContext(ContactContext)

    function handleSubmitNewMessage(event){
        event.preventDefault()
        const new_message = event.target.nuevo_mensaje.value
        addNewMessage(contact_id, new_message)
    }

    return (
        <div>
        <form onSubmit={handleSubmitNewMessage} className="chat-input">
            <label htmlFor='nuevo-mensaje'></label>
            <textarea placeholder="Escribe un mensaje..." id='nuevo_mensaje' name='nuevo_mensaje' rows={1} />
            <button type='submit'>Enviar</button>
        </form>
        </div>
    )
}

export default NewMessagesForm