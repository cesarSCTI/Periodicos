import React, {useState, useEffect} from 'react'
import Buscador from '../../Components/Buscador/Buscardor'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'
import ListProductos from '../../Components/ListProductos/ListProductos'
import ListProductosItem from '../../Components/ListProductos/ListProductosItem'
import { Link } from 'react-router-dom'
import { Opc } from '../../Components/Buttons/Buttons'
import {useProductPetition} from '../Productos/HooksProductos'

const ProductosList = () => {
  const {Productos, handleBusqueda}  = useProductPetition()
  return (
    <>
    <Header Text="Productos">
      <Link to="nuevo"><Opc Text="Nuevo producto"/></Link>
    </Header>
        <Buscador Cambio={handleBusqueda}/>
        <ListProductos/>
        {
          !Productos
          ? <div className="container"><Loader/></div>
          : Productos.map((pro)=><ListProductosItem key={pro.K_Producto} data={pro} />)
        }
        
    </>
  )
}

export default ProductosList