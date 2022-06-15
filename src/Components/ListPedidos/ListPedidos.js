import React from 'react'
import './ListPedidos.css'

const ListPedidos = () => {
  return (
    <div className='container'>
        <div className='listName morado'>
          <div className='d-10'>Pedido</div>
          <div className='d-20'>Cliente</div>
          <div className='d-10'>Total</div>
          <div className='d-20'>Fecha de creación</div>
          <div className='d-20'>Status</div>
          <div className='d-20'>Opciones</div>
        </div>
    </div>
  )
}

export default ListPedidos