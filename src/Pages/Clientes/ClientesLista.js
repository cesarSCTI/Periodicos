import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
import Buscador from '../../Components/Buscador/Buscardor'
import { Success, SuccessPago } from '../../Components/Buttons/Buttons'
import Header from '../../Components/Header/Header'
import ListClientes from '../../Components/ListClientes/ListClientes'
import ListClientesItem from '../../Components/ListClientes/ListClientesItem'
import Loader from '../../Components/Loader/Loader'
import {useClientsPetition} from './HooksClientes';


const ClientesLista = () => {
  const navigate = useNavigate(); 
  const {Client, handleBusqueda,ticketAdeudo}  = useClientsPetition()
  //ticketAdeudo
  /*
  const ticketAdeudo =() =>{
    navigate('/ticketAdeudo',{
        state:{
            items:Client
        }
    })
  }
  */


  return (
    <>
    <Header Text="Clientes" >
    <div class="d-60 justifyRight">
      <SuccessPago F_Click={ticketAdeudo}/>
    </div>
      <div class="d-20">
      <Link to="nuevo"><Success Text="Cliente Nuevo"></Success></Link>
    </div>
      
    </Header>
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