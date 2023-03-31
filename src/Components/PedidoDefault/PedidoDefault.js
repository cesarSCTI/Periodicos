import React, { useState, useEffect } from 'react'
import { Success } from '../Buttons/Buttons'
import PedidoProductos from './PedidoProductos'
import PedidoTitles from './PedidoTitles'
import { usePedidoDefault } from "./usePedidoDefault"



const PedidoDefault = ({ ClienteID }) => {
  const { reqProducts, Datos, Envio, handleChangeProductsDaily } = usePedidoDefault(ClienteID);
  

  useEffect(() => {
    reqProducts(ClienteID);
    console.log("useeffect")
    console.log(Datos)
  },[])

  return (
    <div className='container'>
      <PedidoTitles />

      <form className='formularioProductDefault' onSubmit={Envio} onChange={handleChangeProductsDaily}>
        {
          Datos.length === 0
            ? <></>
            : <>
              {Datos.map((ele, i) => (<PedidoProductos Producto={ele} key={i} />))}
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