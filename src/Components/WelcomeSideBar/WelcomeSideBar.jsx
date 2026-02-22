import React from 'react'
import "./WelcomeSideBar.css"

export default function WelcomeSideBar() {
    return (
        <div className='welcome-container'>
            <div className='download-card'>
                <i className="bi bi-cloud-download"></i>
                <h1>Download WhatsApp for Windows</h1>
                <span>Make calls, share your screen and get a faster experience when you download the Windows app.</span>
                <a href="https://www.whatsapp.com/download"
                    target="_blank"
                    className="download-btn">
                    Download
                </a>
            </div>

            <div className='quick-actions'>
                <button className='quick-actions-btn'>
                    <i className="bi bi-file-earmark-text"></i>
                    <span>Send document</span>
                </button>
                <button className='quick-actions-btn'>
                    <i className="bi bi-person-plus"></i>
                    <span>Add contact</span>
                </button>
            </div>
        </div>
    )
}
