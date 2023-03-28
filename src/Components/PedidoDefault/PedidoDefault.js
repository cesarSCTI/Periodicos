import React, { useState, useEffect } from 'react'
import { Success } from '../Buttons/Buttons'
import PedidoProductos from './PedidoProductos'
import PedidoTitles from './PedidoTitles'
import { usePedidoDefault } from "./usePedidoDefault"
import axios from 'axios'


const PedidoDefault = ({ ClienteID }) => {
  const { reqProducts, datos } = usePedidoDefault(ClienteID);

  const Envio = (e) => {
    e.preventDefault()
    console.log("PedidoDefaultUpdate")
    console.log(datos)
    axios.post(`https://api-rest-sist-periodico.deversite.com/cliente/actualizar_productos_dias/${ClienteID}`, datos, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(function (response) {
        console.log('response ' + JSON.stringify(response));
        if (response.status == 200) {
          console.log("se envio correctamente")
          //navigate(-1, { replace: true });
        }
      })
      .catch(function (error) {
        console.log(error)
      })

  }

  useEffect(() => {
    reqProducts(ClienteID);
  }, [])

  return (
    <div className='container'>
      <PedidoTitles />

      <form className='formularioProductDefault' onSubmit={Envio}>
        {
          datos.length === 0
            ? <></>
            : <>
              {datos.map((ele, i) => (<PedidoProductos Producto={ele} key={i} />))}
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