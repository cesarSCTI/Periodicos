import React from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Loader from '../Loader/Loader'
import './Default.css'

const Default = () => {
  return (
    <div className='container'>
    <Header Text="Inicio" />
    <div className="contenedor">
      <Card ancho={30} Texto="Ventas del dia" Valor=" 159" LinkRoute="/pedidos" />
      <Card ancho={30} Texto="Total de adeudo por cobrar" Valor=" $5043.5" LinkRoute="/cobranza"/>
      <Card ancho={30} Texto="Ingresos del dia de hoy" Valor=" $3498" LinkRoute="/reportes"/>
      <Card ancho={1002} Texto="Seguimos trabajando para darte un mejor servicio" 
            Valor="Navega dentro de las opciones actuales" estilo="mesagge" />
    </div>
    </div>
  )
}

export default Default