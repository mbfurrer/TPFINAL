import { useState, createContext } from "react";
import { getContacts } from "../services/contactService";

export const ContactContext = createContext(
    {
        contacts: [],
        addNewMessage: (contact_id, new_message) => { },
    }
)

const ContactContextProvider = ({ children }) => {
    const contacts = getContacts()
    const [contactState, setContactState] = useState(contacts)


    function addNewMessage(contact_id, new_message) {
        setContactState(
            (currentContactState) => {
                return [...currentContactState].map(
                    (contact) => {
                        if (Number(contact.id) === Number(contact_id)) {
                            contact.messages.push({
                                id: contact.messages.length + 1,
                                text: new_message,
                                send_by_me: true,
                                created_at: new Date().toISOString(),
                                is_read: false,
                            })
                        }
                        return contact
                    }
                )
            }
        )
    }

    function addNewContact(contactData) {
    setContactState((currentContactState) => {
        const lastId = currentContactState.length > 0
        ? currentContactState[currentContactState.length - 1].id
        : 0

        const newContact = 
        {
            id: lastId + 1,
            phone: contactData.phone,
            type: contactData.type,
            name: contactData.name,
            favorite: contactData.is_favorite ?? false,
            profile_picture: "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg",
            messages: []
        }

        return [...currentContactState, newContact]
    })
}

    const provider_values = {
        contacts: contactState,
        addNewMessage,
        addNewContact,
        }

    return (
        <ContactContext.Provider
            value={provider_values}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider