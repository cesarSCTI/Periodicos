import React from 'react'
import {Link} from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'
import FormUser from '../../Components/FormUser/FormUser'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'
import PedidoDefault from '../../Components/PedidoDefault/PedidoDefault'
import { useCRUDCliente } from './useCRUDCliente'

const ClientesInterior = () => {
  const {Cliente, isLoading, parameter, ClienteUpdate, handleChange} = useCRUDCliente()

  return (
    <>
      {
        isLoading
        ? <div className="container"><Loader /></div>
        :<>
          <Header Text={`Cliente | #${parameter.id}`}>
            <Link to="/clientes"><Error Text="Regresar"/></Link>
          </Header>
          <FormUser InfoUser={Cliente} Envio={ClienteUpdate} Cambio={handleChange}/>
          <Header Text="Pedido por defecto"/>
          <PedidoDefault ClienteID={parameter.id} />
        </>
      }
    </>
  )
}

export default ClientesInterior