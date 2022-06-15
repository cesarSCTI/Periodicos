import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import {Error} from '../../Components/Buttons/Buttons';
import FormProductos from '../../Components/FormProductos/FormProductos';

const Periodicos = () => {
  return (
    <>
        <Header Text="Producto Nuevo">
           <Link to="/productos"> <Error Text="Cancelar"/></Link>
        </Header>
        <FormProductos/>
    </>
  )
}

export default Periodicos