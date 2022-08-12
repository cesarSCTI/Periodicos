import React from 'react'
import Buscador from '../../Components/Buscador/Buscardor'
import Header from '../../Components/Header/Header'
import ListClientes from '../../Components/ListClientes/ListClientes'
import ListClientesItem from '../../Components/ListClientes/ListClientesItem'
import Loader from '../../Components/Loader/Loader'
import {useClientsPetition} from './HooksClientes';

const ClientesLista = () => {
  const {Client, handleBusqueda}  = useClientsPetition()


  return (
    <>
    <Header Text="Clientes" />
      <Buscador Cambio={handleBusqueda}/>
      <ListClientes/>
      {
       !Client 
       ? <div className="container"> <Loader /> </div>
       : Client.map((client) => <ListClientesItem cl={client} key={`${client.K_Cliente}`}/>)
      }
    </>
  )
}

export default ClientesLista