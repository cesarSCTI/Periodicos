import React from 'react'
import { Success } from '../Buttons/Buttons'
import PedidoProductos from './PedidoProductos'
import PedidoTitles from './PedidoTitles'

const PedidoDefault = () => {
  const product = []
  return (
    <div className='container'>
        <PedidoTitles/>
        <form className='formularioProductDefault'>
          <PedidoProductos Producto={product}/>
          <PedidoProductos Producto={product}/>
          <PedidoProductos Producto={product}/>
          <PedidoProductos Producto={product}/>
          <PedidoProductos Producto={product}/>
          <PedidoProductos Producto={product}/>
          <div className='formulario-btn'>
            <Success Text="Guardar" /> 
          </div>
        </form>
    </div>
  )
}

export default PedidoDefault