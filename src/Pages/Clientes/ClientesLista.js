import React, {useState, useEffect} from 'react'
import Buscador from '../../Components/Buscador/Buscardor'
import Header from '../../Components/Header/Header'
import ListClientes from '../../Components/ListClientes/ListClientes'
import ListClientesItem from '../../Components/ListClientes/ListClientesItem'
import Loader from '../../Components/Loader/Loader'

const ClientesLista = () => {

  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const fetchData = async () =>{
      const response = await fetch('https://api-rest-sist-periodico.deversite.com/clientes')
      const data = await response.json().finally()
      setClients(data)
      setIsLoading(false)
  }
  useEffect(()=>{
    fetchData()
  }, []);


  return (
    <div className=''>
    <Header Text="Clientes" />
      <Buscador />
      <ListClientes/>
      {
        isLoading
        ? <div className="container"> <Loader /> </div>
        : clients.clientes.map((client) => 
            <ListClientesItem cl={client} key={`${client.K_Cliente}`}/>
          )
      }
      
    </div>
  )
}

export default ClientesLista

/*
Data.map((data) =>
          <div className='contenedorBody' key={data.ID_Alimento}>
            <div className='d-12-body'>{data.ID_Alimento}</div>
            <div className='d-24-body'>{data.Nombre}</div>
            <div className='d-12-body'>{data.Precio}</div>
            <div className='d-12-body'>{data.Stock}</div>
            <div className='d-12-body'>{data.Tamano}</div>
            <div className='d-24-button'><Link to={`${data.ID_Alimento}`}>Ver</Link></div>
          </div>
*/