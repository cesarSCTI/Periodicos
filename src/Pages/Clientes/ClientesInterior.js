import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons'
import FormUser from '../../Components/FormUser/FormUser'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'
import PedidoDefault from '../../Components/PedidoDefault/PedidoDefault'

const ClientesInterior = () => {
  const parameter = useParams();
  const[Client, setClient] = useState()
  const[isLoading, setIsLoading] = useState(true)

  const requestClient = async () =>{
    const response = await fetch(`https://api-rest-sist-periodico.deversite.com/clientes/${parameter.id}`)
    const data = await response.json().finally()
    setClient(data)
    setIsLoading(false)
    console.log(Client)
  }

  useEffect(()=>{
    requestClient()
  }, []);

  return (
    <>
      {
        isLoading
        ? <div className="container"><Loader /></div>
        :<>
          <Header Text={`Cliente | #${parameter.id}`}>
            <Link to="/clientes"><Error Text="Regresar"/></Link>
          </Header>
          <FormUser InfoUser={Client[0]}/>
          <Header Text="Pedido por defecto"/>
          <PedidoDefault/>
        </>
      }
    </>
  )
}

export default ClientesInterior