import React, { useContext } from 'react'
import './ProfileScreen.css'
import { ContactContext } from '../../Context/ContactContext'


export default function ProfileScreen() {

    const { profile } = useContext(ContactContext)

    return (
        <div className="profile-page">
            <div className="profile-column">
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

            <div className='profile-empty-space'>
                <i class="bi bi-person-circle"></i>
                <h1>Profile</h1>
            </div>
        </div>
    )
}