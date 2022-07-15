import React from 'react'
import Header from '../../Components/Header/Header'
import { Link, useParams } from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons';
import FormPedidos from '../../Components/FormPedidos/FormPedidos';


const PedidosInterior = () => {
const {id} = useParams();
const x= []; // hacemos la peticion a la API
  return (
    <>
        <Header Text={`Pedido | ${id}`}>
           <Link to="/pedidos"><Error Text="Regresar"></Error></Link>
        </Header>
        <FormPedidos PedidoData={x}/>

    </>
  )
}

export default PedidosInterior