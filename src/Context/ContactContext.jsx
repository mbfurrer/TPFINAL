import { useState, createContext } from "react";
import { getContacts } from "../services/contactService";


export const ContactContext = createContext(
    {
        contacts: [],
        favorite_name: '',
        addNewMessage: (contact_id, new_message) => { }
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
                                id: contact.messages.lenght + 1,
                                text: new_message,
                                send_by_me: true,
                                created_at: new Date().toISOString,
                                is_read: false,
                            })
                        }
                        return contact
                    }
                )
            }
        )
    }

    const provider_values = {
        contacts: contactState,
        favorite_name: 'pepe',
        addNewMessage
    }

    return (
        <ContactContext.Provider
            value={provider_values}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider