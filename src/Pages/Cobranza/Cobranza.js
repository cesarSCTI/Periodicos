import React from 'react'
import Buscador from '../../Components/Buscador/Buscardor'
import ListPedidos from '../../Components/ListPedidos/ListPedidos'
import ListPedidosItem from '../../Components/ListPedidos/ListPedidosItem'
import Loader from '../../Components/Loader/Loader'
//import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import { usePetitionPedidosCobranza } from './HooksCobranza'
import { SuccessActualizar } from '../../Components/Buttons/Buttons'
import { useNavigate } from 'react-router-dom'

const Cobranza = () => {
  const{Cobranza,handleBusqueda,requestPedidosCobranza} = usePetitionPedidosCobranza()
  const navigate = useNavigate();

  const F_Actualizar = () =>{
    console.log("Hola")
    navigate("/cobranza", { replace: true });
  }

  return (
    <>
      <Header Text="Cobranza Clientes">
        <div class="d-60 justifyRight">
          <SuccessActualizar F_Click={requestPedidosCobranza}/>
        </div>
      </Header>
      <Buscador Cambio={handleBusqueda}/>
      <ListPedidos/>
      {
        !Cobranza
        ?<div className='container'><Loader/></div>
        :Cobranza.map((ele)=><ListPedidosItem infoOrder={ele} key={ele.K_Pedido}/>)
      }
      {
      /*
        <div className='container'>
            <Card ancho="1002" estilo="mesagge" Texto="Seguimos trabajando..."/>
        </div>
      */
      }
    </>
  )
}

export default Cobranza