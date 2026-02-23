import React, { useContext, useState } from 'react'
import './ProfileScreen.css'
import OptionSideBar from '../../Components/OptionSideBar/OptionSideBar'
import { ContactContext } from '../../Context/ContactContext'


export default function ProfileScreen() {

    const { profile } = useContext(ContactContext)


    return (
        <div className='home-containter'>
            <div>
                <OptionSideBar />
            </div>

            <div>
                <div className="profile-page">
                    <div className="profile-header">
                        <h2>Profile</h2>
                    </div>

                    <div className="profile-content">
                        <img
                            src={profile.profile_picture}
                            alt={profile.name}
                            className="profile-avatar"
                        />

                        <h3>{profile.name}</h3>

                        <p className="profile-status">
                            {profile.status}
                        </p>

                        <div className="profile-info">
                            <span className="label">Teléfono</span>
                            <p>{profile.phone}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}