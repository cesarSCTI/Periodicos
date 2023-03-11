import React, { useState, useEffect } from 'react'
import { Success } from '../Buttons/Buttons'
import PedidoProductos from './PedidoProductos'
import PedidoTitles from './PedidoTitles'
import { usePedidoDefault } from "./usePedidoDefault"

 
  const PedidoDefault = ({ ClienteID }) => {
    const {reqProducts, datos} = usePedidoDefault(ClienteID);
    
    useEffect(() => {
      reqProducts(ClienteID);
    }, [])

  return (
    <div className='container'>
      <PedidoTitles />

      <form className='formularioProductDefault' onSubmit={() => alert()}>
        {
          datos.length === 0
          ?<></>
          :<>
          {datos.map((ele, i) => (<PedidoProductos Producto={ele} key={i}/>) )}
          </>
        }
        <div className='formulario-btn'>
          <Success Text="Guardar" />
        </div>
      </form>
    </div>
  )
}

export default PedidoDefault