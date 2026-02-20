import React from 'react'
import { Link } from 'react-router'

export default function ErrorNotFoundScreen() {
  return (
    <div>
        <h1>Ups, pagina no encontrada</h1>
        <p>La pagina que estas buscando no existe o ha sido movida</p>
        <Link to= "/">Volver al Inicio</Link>
    </div>
  )
}