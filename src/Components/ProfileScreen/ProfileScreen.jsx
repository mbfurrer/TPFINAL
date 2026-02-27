import React, { useContext } from 'react'
import './ProfileScreen.css'
import { ContactContext } from '../../Context/ContactContext'


export default function ProfileScreen({onClose}) {

    const { profile } = useContext(ContactContext)

    return (
        <div className="profile-page">
            <div className="profile-column">

                <div className='profile-title'>

                    <button onClick={onClose}
                    className='profile-back-btn'>
                        <i class="bi bi-arrow-left"></i>
                    </button>
                    <h2>Profile</h2>
                    <img
                        src={profile.profile_picture}
                        alt={profile.name}
                        className="profile-avatar"
                    />
                </div>

                <div className='profile-data'>

                    <div className='profile-data-card'>
                        <span >Name</span>
                        <p>{profile.name}</p>
                    </div>
                    <div className='profile-data-card'>
                        <span>About</span>
                        <p>
                            {profile.status}
                        </p>
                    </div>
                    <div className='profile-data-card'>
                        <span>Phone</span>
                        <p>{profile.phone}</p>
                    </div>
                </div>
            </div>

            <div className='profile-empty-space'>
                <i className=" bi bi-person-circle"></i>
                <h1>Profile</h1>
            </div>
        </div>
    )
}