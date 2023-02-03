import React from 'react'
import { Link } from 'react-router-dom'
import Buscador from '../../Components/Buscador/Buscardor'
import { Opc } from '../../Components/Buttons/Buttons'
import Header from '../../Components/Header/Header'
import ListPedidos from '../../Components/ListPedidos/ListPedidos'
import ListPedidosItem from '../../Components/ListPedidos/ListPedidosItem'
import Loader from '../../Components/Loader/Loader'
import { usePetitionPedidos } from './HooksPedidos'

const Pedidos = () => {

const {Pedidos, handleBusqueda} = usePetitionPedidos()

return (
    <>
        <Header Text="Pedidos">
          <Link to="nuevo"><Opc Text="Nuevo pedido"/></Link>
        </Header>
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