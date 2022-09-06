import React from 'react'
import { Error, Opc } from '../Buttons/Buttons'
import { Link } from 'react-router-dom'
import './ListProductos.css'

const ListProductosItem = ({data}) => {
  return (
    <div className='container'>
        <div className='listNameBody border'>
        <div className='d-20'>#{data.K_Producto}</div>
        <div className='d-50'>{data.Nombre}</div>
        <div className='d-10'>${data.Precio}</div>
        <div className='d-30 opc'>
            <Link to={`/productos/${data.K_Producto}`}><Opc Text="Editar" /></Link>
            {/*<Error Text="Eliminar" />*/}
        </div>
        </div>
    </div>
  )
}
export default ListProductosItem