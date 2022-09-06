import React from 'react'
import Header from '../../Components/Header/Header'
import FormProductos from '../../Components/FormProductos/FormProductos'
import { Link } from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'

const PeriodicosNuevo = () => {
  const item = {
    "K_Producto": 0,
    "Nombre": ``,
    "Precio": ``,
    "B_Activo": 1
  };
  return (
    <>
        <Header Text="producto | nuevo">
        <Link to="/productos"> <Error Text="Cancelar"/></Link>
        </Header>
        <FormProductos data={item}/>
        {/*<FormProductos />*/}
    </>
  )
}

export default PeriodicosNuevo