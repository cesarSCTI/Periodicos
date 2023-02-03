import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Loader from '../Loader/Loader'
import './Default.css'

const Default = () => {
  const [pedidos_dlDia,setPedidosDia] = useState([])
  const [adeudo_dlDia,setAdeudoDia] = useState([])
  const [ingresos_dlDia,setIngresosDia] = useState([])
/*
  const requestPedidosDia = async() =>{
    const response = await fetch(`https://api-rest-sist-periodico.deversite.com/pedidos_del_dia`)
    const data = await response.json()
    setPedidosDia(data[0])
    console.log(data[0])
  }
*/

  const requestPedidosDia = async() =>{
    await fetch(`https://api-rest-sist-periodico.deversite.com/pedidos_del_dia`)
    .then(response => response.json())
    .then(response => {
      setPedidosDia(response[0]);
      console.log(response[0]);
    })
  }

  const requestAdeudoDia = async() =>{
    await fetch(`https://api-rest-sist-periodico.deversite.com/adeudo_del_dia`)
    .then(response => response.json())
    .then(response =>{
      setAdeudoDia(response[0]);
      console.log(response[0]);
    })
  }

  const requestIngresosDia = async() => {
    await fetch(`https://api-rest-sist-periodico.deversite.com/ingresos_del_dia`)
    .then(response => response.json())
    .then(response =>{
      setIngresosDia(response[0]);
      console.log(response[0]);
    })
  }

  useEffect(()=>{
    requestPedidosDia()
    requestAdeudoDia()
    requestIngresosDia()
    ///console.log("re "+pedidos_dlDia[0]);
  },[])

  return (
    <div className='container'>
    <Header Text="Inicio" />
    <div className="contenedor">
      <Card ancho={30} Texto="Ventas del dia" Valor={`${pedidos_dlDia.Cant_Pedido}`} LinkRoute="/pedidos" />
      <Card ancho={30} Texto="Total de adeudo por cobrar" Valor={`${adeudo_dlDia.Adeudo_del_Dia}`} LinkRoute="/cobranza"/>
      <Card ancho={30} Texto="Ingresos del dia de hoy" Valor={`${ingresos_dlDia.Ingresos_del_Dia}`} LinkRoute="/reportes"/>
      <Card ancho={1002} Texto="Seguimos trabajando para darte un mejor servicio" 
            Valor="Navega dentro de las opciones actuales" estilo="mesagge" />
    </div>
    </div>
  )
}

export default Default