import React, { useState, useContext } from "react"
import { ContactContext } from '../../Context/ContactContext'
import "./AddNewContact.css"

const NewContactForm = ({ onCancel }) => {

    const { addNewContact } = useContext(ContactContext)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [isFavorite, setIsFavorite] = useState(false)


    function handleSubmitNewContact(e) {
        e.preventDefault()

        if (!name.trim() || !phone.trim())

            return
        addNewContact({
            name: name.trim(),
            phone: phone.trim(),
            type: "ind",
            is_favorite: isFavorite
        })

        setName("")
        setPhone("")
        setIsFavorite(false)
    }


    return (
        <div className="add-contact-scren">
            
            <div className="top-row-addc">
            <h2>New contact</h2>
            <button type="button" onClick={onCancel}>
                <i class="bi bi-x-lg"></i>
            </button>
            </div>

            <form 
            className="add-contact-form"
            onSubmit={handleSubmitNewContact}>

                <div className="input-group">
                <label> 
                    <i class="bi bi-person-fill"></i>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                </div>

                <div className="input-group">
                <label>
                    <i class="bi bi-telephone-fill"></i>                    
                    <input
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </label>
                </div>

                <div class="action-row">
                <label class="favorite">
                    <input
                        type="checkbox"
                        checked={isFavorite}
                        onChange={() => setIsFavorite(!isFavorite)}
                        />
                        <span class="checkmark"></span>

                    Favorite
                </label>

                    <button class="add-btn" type="submit">Add</button>
                    
                </div>
            </form>
        </div>
    )
}



export default NewContactForm