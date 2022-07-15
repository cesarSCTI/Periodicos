import React from 'react'
import './FormPedidos.css';

const PedidoProducts = ({ listProducts }) => {
  return (
    <div className='container'>
      <div className='titulos'>
        <div className='d-20'>Nombre</div>
        <div className='d-20'>Pedido</div>
        <div className='d-20'>Devoluciones</div>
        <div className='d-20'>Precio</div>
        <div className='d-20'>Total/p</div>
      </div>
      <div className='contentProducts'>
        <div className='d-20'>Nombre</div>
        <div className='d-20'>
          <input type="text" className='inputProduct' />
        </div>
        <div className='d-20'>
          <input type="text" className='inputProduct' />
        </div>
        <div className='d-20'>
          <input type="text" className='inputProduct' />
        </div>
        <div className='d-20'>
          <input type="text" className='inputProduct' />
        </div>
      </div>
    </div>
  )
}

export default PedidoProducts