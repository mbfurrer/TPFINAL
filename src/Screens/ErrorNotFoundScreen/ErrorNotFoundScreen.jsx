import React from 'react'
import { Link } from 'react-router'
import './ErrorNotFound.css'

export default function ErrorNotFoundScreen() {
  return (
    <div className="error-screen">
        <div className="error-card">
            <h1>404</h1>
            <h2>Ups, página no encontrada</h2>
            <p>La página que estás buscando no existe o ha sido movida.</p>
            <Link to="/" className="error-btn">
                Volver al Inicio
            </Link>
        </div>
    </div>
  )
}