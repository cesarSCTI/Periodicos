import React from 'react'
import './ListProductos.css'

const ListProductos = () => {
  return (
    <div className='container'>
        <div className='listName morado'>
          <div className='d-20'>ID</div>
          <div className='d-50'>Nombre</div>
          <div className='d-10'>Precio</div>
          <div className='d-30'>Opciones</div>
        </div>
    </div>
  )
}

export default ListProductos