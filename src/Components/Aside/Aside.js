import React from 'react'
import { Link } from 'react-router-dom';
import {InventarioBTN, NavPrincipal} from '../Buttons/Buttons';
import './Aside.css';

const Aside = () => {
  return (
    <div className='aside'>
      <div className='opcion-1'>
        <Link to="/inventario-diario">
          <InventarioBTN Text="Inventario Diario"><i className='bx bx-calendar'></i></InventarioBTN>
        </Link>
      </div>
      <div className='opcion'>
        <Link to="clientes"><NavPrincipal Text="Fichas Clientes"><i className='bx bx-user-pin'></i></NavPrincipal></Link>
      </div>
      <div className='opcion'>
      <Link to="cobranza"><NavPrincipal Text="Cobranza"><i className='bx bx-money-withdraw'></i></NavPrincipal></Link>
      </div>
      <div className='opcion'>
        <Link to="productos/"><NavPrincipal Text="Productos"><i className='bx bx-book-open' ></i></NavPrincipal></Link>
      </div>
      <div className='opcion'>
      <Link to="pedidos"><NavPrincipal Text="Pedidos"><i className='bx bx-cube-alt' ></i></NavPrincipal></Link>
      </div>
      <div className='opcion'>
        <NavPrincipal Text="Reportes"><i className='bx bx-bar-chart' ></i></NavPrincipal>
      </div>
    </div>
  )
}

export default Aside