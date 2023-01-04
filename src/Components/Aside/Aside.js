import React from 'react'
import { Link } from 'react-router-dom';
import {InventarioBTN, NavPrincipal} from '../Buttons/Buttons';
import './Aside.css';

const Aside = () => {
  return (
    <div className='aside'>
      <div className='opcion'>
        <span className="opcionTitle">Administración</span>
        <Link to="/"><NavPrincipal Text="Dashbord"><i className='bx bx-home-alt-2'></i></NavPrincipal></Link>
        <Link to="clientes"><NavPrincipal Text="Clientes"><i className='bx bx-user-pin'></i></NavPrincipal></Link>
      </div>
      <div className='opcion'>
        <span className="opcionTitle">Cobranza</span>
        <Link to="cobranza"><NavPrincipal Text="Cobranza"><i className='bx bx-money-withdraw'></i></NavPrincipal></Link>
      </div>
      <div className='opcion'>
        <span className="opcionTitle">operaciones</span>
        <Link to="/inventario-diario"><NavPrincipal Text="Inventario diario"><i className='bx bx-user-pin'></i></NavPrincipal></Link>
        <Link to="productos/"><NavPrincipal Text="Productos"><i className='bx bx-book-open' ></i></NavPrincipal></Link>
        <Link to="pedidos"><NavPrincipal Text="Pedidos"><i className='bx bx-cube-alt' ></i></NavPrincipal></Link>
        <Link to="reportes"><NavPrincipal Text="Reportes"><i className='bx bx-bar-chart' ></i></NavPrincipal></Link>
        <Link to="ticket"><NavPrincipal Text="Ticket ejemplo"><i className='bx bx-bar-chart' ></i></NavPrincipal></Link>
      </div>
    </div>
  )
}

export default Aside