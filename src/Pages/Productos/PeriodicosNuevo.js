import React from 'react'
import Header from '../../Components/Header/Header'
import FormProductos from '../../Components/FormProductos/FormProductos'
import { Link } from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'

const PeriodicosNuevo = () => {
  return (
    <>
        <Header Text="producto | nuevo">
        <Link to="/productos"> <Error Text="Cancelar"/></Link>
        </Header>
        {/*<FormProductos />*/}
    </>
  )
}

export default PeriodicosNuevo