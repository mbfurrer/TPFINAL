import React, { useContext } from 'react'
import './ProfileScreen.css'
import { ContactContext } from '../../Context/ContactContext'


export default function ProfileScreen() {

    const { profile } = useContext(ContactContext)

    return (
            
        <div className='home-contact-section'>
            <div className="profile-page">
                
                <h2>Profile</h2>

                <div>
                <img
                    src={profile.profile_picture}
                    alt={profile.name}
                    className="profile-avatar"
                />
                </div>

                <span >Name</span>
                <p>{profile.name}</p>

                <span>About</span>
                <p>
                    {profile.status}
                </p>

                <span>Phone</span>
                <p>{profile.phone}</p>
            </div>
            </div>
    )
}