import React from 'react'
import Buscador from '../../Components/Buscador/Buscardor'
import Header from '../../Components/Header/Header'
import ListPedidos from '../../Components/ListPedidos/ListPedidos'
import ListPedidosItem from '../../Components/ListPedidos/ListPedidosItem'

const Pedidos = () => {
  return (
    <>
        <Header Text="Pedidos" />
        <Buscador />
        <ListPedidos />
        <ListPedidosItem />
        <ListPedidosItem />
        <ListPedidosItem />
        <ListPedidosItem />
        <ListPedidosItem />
        <ListPedidosItem />
        <ListPedidosItem />
        <ListPedidosItem />
        <ListPedidosItem />
    </>
  )
}

export default Pedidos