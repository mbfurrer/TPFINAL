import React, { useState, useContext } from "react";

import "./DropMenu.css";

function DropMenu({ onAddNewContact, onOpenProfile }) {
    const [isOpen, setIsOpen] = useState(false);
    
    
    return (
        <div className="menu-container">
            <button
                className="menu-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <i className="bi bi-three-dots-vertical"></i>
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    <button
                        className="menu-item"
                        onClick={() => {
                            onAddNewContact();
                            setIsOpen(false);
                        }}>
                        Add new contact
                    </button>
                    <button
                        className="menu-item"
                        onClick={onOpenProfile}>
                        Profile
                    </button>
                    <button className="menu-item"
                        onClick={() => {
                            onAddNewContact();
                            setIsOpen(false);
                        }}>
                        Log out</button>
                </div>
            )
            }
        </div >
    );
}



export default DropMenu