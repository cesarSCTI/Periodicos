import React from 'react'
import './ListClientes.css';

const ListClientes = () => {
  return (
    <div className='container'>
        <div className='listName morado'>
          <div className='d-10'>Ficha</div>
          <div className='d-20'>Nombre</div>
          <div className='d-10'>Telefono</div>
          <div className='d-30'>Direccion</div>
          <div className='d-10'>Adeudo</div>
          <div className='d-20'>Opciones</div>
        </div>
    </div>
  )
}

export default ListClientes