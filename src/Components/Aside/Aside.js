import React from 'react'
import {InventarioBTN, NavPrincipal, SubNav} from '../Buttons/Buttons';
import './Aside.css';

const Aside = () => {
  return (
    <div className='aside'>
      <div className='opcion-1'>
        <InventarioBTN Text="Inventario Diario"><i className='bx bx-calendar'></i></InventarioBTN>
      </div>
      <div className='opcion'>
        <NavPrincipal Text="Fichas Clientes"><i className='bx bx-user-pin'></i></NavPrincipal>
        <SubNav Text="Crear Buscar" />
        <SubNav Text="Buscar" />
      </div>
      <div className='opcion'>
        <NavPrincipal Text="Productos"><i className='bx bx-book-open' ></i></NavPrincipal>
        <SubNav Text="Crear Buscar" />
        <SubNav Text="Buscar" />
      </div>
      <div className='opcion'>
        <NavPrincipal Text="Pedidos"><i className='bx bx-cube-alt' ></i></NavPrincipal>
        <SubNav Text="Crear Buscar" />
        <SubNav Text="Buscar" />
      </div>
      
    </div>
  )
}

export default Aside