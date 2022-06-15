import React from 'react'
import { Opc } from '../Buttons/Buttons'
import { Link } from 'react-router-dom'
import './ListPedidos.css'

const ListPedidosItem = () => {
  return (
    <div className='container'>
        <div className='listNameBody border'>
          <div className='d-10'>#0001</div>
          <div className='d-20'>Alan astillo</div>
          <div className='d-10'>$365.00</div>
          <div className='d-20'>Martes 10-05-2022</div>
          <div className='d-20'>
           <span className='status'> Status </span>
          </div>
          <div className='d-20 opc'>
            <Link to="/pedidos/1"><Opc Text="Ver" /></Link>
          </div>
        </div>
    </div>
  )
}

export default ListPedidosItem