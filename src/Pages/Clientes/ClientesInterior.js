import React from 'react'
import { Link} from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'
import FormUser from '../../Components/FormUser/FormUser'
import Header from '../../Components/Header/Header'
import PedidoDefault from '../../Components/PedidoDefault/PedidoDefault'

const ClientesInterior = () => {
  return (
    <>
        <Header Text="Informacion de cliente">
          <Link to="/clientes"><Error Text="Regresar"/></Link>
        </Header>
        <FormUser/>
        <Header Text="Pedido por defecto"/>
        <PedidoDefault/>
    </>
  )
}

export default ClientesInterior