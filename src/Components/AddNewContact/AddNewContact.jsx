import React from 'react'

export default function AddNewContact() {
    return (
        <div className="add-contact-form">
            <h2>New contact</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>

                <label>
                    Number:
                    <input
                        type="text"
                        value={profilePicture}
                        onChange={e => setProfilePicture(e.target.value)}
                    />
                </label>

                <label>
                    Favorito:
                    <input
                        type="checkbox"
                        checked={favorite}
                        onChange={e => setFavorite(e.target.checked)}
                    />
                </label>

                <div className="buttons">
                    <button type="submit">Agregar</button>
                    {onClose && <button type="button" onClick={onClose}>Cancelar</button>}
                </div>
            </form>
        </div>
    )
}
