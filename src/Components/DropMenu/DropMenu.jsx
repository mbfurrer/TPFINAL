import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./DropMenu.css";

function DropMenu({ onAddNewContact, onOpenProfile, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();          
    navigate("/login");  
  };

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
            onClick={() => {
              onOpenProfile();
              setIsOpen(false);
            }}>Profile
          </button>

          <button className="menu-item"
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
          >
            Log out
          </button>
        </div>
      )
      }
    </div >
  );
}



export default DropMenu