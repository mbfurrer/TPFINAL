import React, { useContext } from 'react'
import './ProfileInfo.css'
import { ContactContext } from '../../Context/ContactContext'

const ProfileInfo = () => {
    const { profile } = useContext(ContactContext)

    return (
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
    );
};


export default ProfileInfo