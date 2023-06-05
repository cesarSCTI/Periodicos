import React, {useState, useEffect} from 'react'
import Header from '../../Components/Header/Header'
import { Link, useParams } from 'react-router-dom'
import { Error } from '../../Components/Buttons/Buttons';
import FormPedidos from '../../Components/FormPedidos/FormPedidos';
import Loader from '../../Components/Loader/Loader'


const PedidosInterior = () => {
const {id} = useParams();
const [dataOrder, setDataOrder] = useState([])
const [dataOrderInfo, setDataOrderInfo] = useState([])
const [isLoading, setIsLoading] = useState(true)

const reqOrder = async () =>{
  const response = await fetch(`https://api-rest-sist-periodico.deversite.com/pedido_detalle/${id}`)
  const data = await response.json().finally()
  setDataOrder(data)
  //console.log(data)
}
const reqOrderInfo = async () =>{
  const response = await fetch(`https://api-rest-sist-periodico.deversite.com/pedido/${id}`)
  const data = await response.json().finally()
  setDataOrderInfo(data)
  console.log(data)
  setIsLoading(false)
}

useEffect(()=>{
  reqOrderInfo()
  reqOrder()
},[])

  return (
    <>
        <Header Text={`Pedido | ${id}`}>
           <Link to="/pedidos"><Error Text="Regresar"></Error></Link>
        </Header>
        {
          isLoading
          ?<div className="container"><Loader/></div>
          :<FormPedidos PedidoData={dataOrder} orderInfo={dataOrderInfo[0]} />
        }
        

    </>
  )
}

export default PedidosInterior