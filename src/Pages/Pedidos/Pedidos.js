import React from 'react'
import Buscador from '../../Components/Buscador/Buscardor'
import Header from '../../Components/Header/Header'
import ListPedidos from '../../Components/ListPedidos/ListPedidos'
import ListPedidosItem from '../../Components/ListPedidos/ListPedidosItem'
import Loader from '../../Components/Loader/Loader'
import { usePetitionPedidos } from './HooksPedidos'

const Pedidos = () => {

const {Pedidos, handleBusqueda} = usePetitionPedidos()

return (
    <>
        <Header Text="Pedidos" />
        <Buscador Cambio={handleBusqueda}/>
        <ListPedidos />
        {
          !Pedidos
          ? <div className="container"><Loader /></div>
          : Pedidos.map( (ele)=><ListPedidosItem infoOrder={ele} key={ele.K_Pedido}/> )
        }
    </>
  )
}

export default Pedidos