import { useState, createContext } from "react";
import { getContacts } from "../services/contactsService";



export const ContactContext = createContext(
    {
        contacts:[],
        favorite_name: ''
    }
)

const ContactContextProvider = ({ children }) => {
    const contacts = getContacts()
    const [contactState, setContactState] = useState(contacts)

    const provider_values = { 
        contacts: contactState,
        favorite_name: 'pepe'
    }

    return (
        <ContactContext.Provider 
        value={provider_values}>
        {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider