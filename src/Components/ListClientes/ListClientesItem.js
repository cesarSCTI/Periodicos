import React from 'react'
import { Link } from 'react-router-dom';
import { Opc, Error } from '../Buttons/Buttons';
import './ListClientes.css';

const ListClientesItem = () => {
  return (
    <div className='container'>
    <div className='listNameBody border'>
      <div className='d-10'>#000</div>
      <div className='d-20'>Alan Castillo</div>
      <div className='d-10'>1010101010</div>
      <div className='d-30'>Paseo de los olivos #30</div>
      <div className='d-10'>$156.00</div>
      <div className='d-20 opc'>
       <Link to="/clientes/1"> <Opc Text="Editar" /></Link>

        <Error Text="X"/>
        </div>
    </div>
</div>
  )
}

export default ListClientesItem