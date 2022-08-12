import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ancho, Texto, Valor, estilo, LinkRoute="/"}) => {
  return (
    <div className={`d-${ancho} card ${estilo}`}>
       <span className="cardTitle"> {Texto}</span>
        <span className="cardValue">{Valor}</span>
        <Link to={`${LinkRoute}`}><span className="cardLink">Ver más</span></Link>
    </div>
  )
}

export default Card