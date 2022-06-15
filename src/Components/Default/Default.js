import React from 'react'
import Header from '../Header/Header'
import Loader from '../Loader/Loader'

const Default = () => {
  return (
    <div className='container'>
    <Header Text="Inicio" />
    <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <Loader />
        <p></p>
        <p>Seguimos trabajando para darte un mejor servicio</p>
        <p>Navega dentro de las opciones actuales</p>
    </div>
  )
}

export default Default