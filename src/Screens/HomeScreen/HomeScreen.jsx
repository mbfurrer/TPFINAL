import React from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import './HomeScreen.css'

export default function HomeScreen() {
    return (
        <div className='home-containter'>
            <div className='contact-sidebar'>
            <ContactSideBar />
            </div>
            <div className='message-sidebar'>
                <p>Comienza un chat</p>
            </div>
        </div>
    )
}