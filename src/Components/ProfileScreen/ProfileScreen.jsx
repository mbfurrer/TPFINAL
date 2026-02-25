import React, { useContext, useState } from 'react'
import './ProfileScreen.css'
import OptionSideBar from '../OptionSideBar/OptionSideBar'
import { ContactContext } from '../../Context/ContactContext'


export default function ProfileScreen() {

    const { profile } = useContext(ContactContext)

    return (


        <div className='profile-screen-containter'>
            <div className='home-option-section'>
                <OptionSideBar />
            </div>

            <div className="profile-page">
                <h2>Profile</h2>
                <img
                    src={profile.profile_picture}
                    alt={profile.name}
                    className="profile-avatar"
                />

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