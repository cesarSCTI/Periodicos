import React from 'react'
import { Error, Opc } from '../Buttons/Buttons'
import { Link } from 'react-router-dom'
import './ListProductos.css'

const ListProductosItem = () => {
  return (
    <div className='container'>
        <div className='listNameBody border'>
        <div className='d-20'>#000</div>
        <div className='d-50'>Informador</div>
        <div className='d-10'>$5.00</div>
        <div className='d-30 opc'>
            <Link to="/productos/1"><Opc Text="Editar" /></Link>
            <Error Text="x" />
        </div>
        </div>
    </div>
  )
}

export default ListProductosItem