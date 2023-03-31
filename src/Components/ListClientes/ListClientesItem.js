import React from 'react'
import { Link } from 'react-router-dom';
import { Opc, Error, SuccessVer } from '../Buttons/Buttons';
import './ListClientes.css';

const ListClientesItem = ({cl}) => {
  return (
    <div className='container'>
    <div className='listNameBody border'>
      <div className='d-10'>#{cl.K_Cliente}</div>
      <div className='d-20'>{cl.Nombre}</div>
      <div className='d-10'>{cl.Telefono}</div>
      <div className='d-30'>{cl.Direccion}</div>
      <div className='d-10'>${cl.Adeudo}</div>
      <div className='d-20 opc'>
       <Link to={`/clientes/${cl.K_Cliente}`}> <SuccessVer/></Link>
      </div>
    </div>
</div>
  )
}

export default ListClientesItem
