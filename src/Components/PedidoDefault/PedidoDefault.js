import React,{useState, useEffect} from 'react'
import { Success } from '../Buttons/Buttons'
import PedidoProductos from './PedidoProductos'
import PedidoTitles from './PedidoTitles'

const PedidoDefault = ({ClienteID}) => {
  /*const [data, setData] = useState([])

  const reqProducts = async () =>{
    const response = await fetch(`https://api-rest-sist-periodico.deversite.com/clientes/productos_dia/${ClienteID}`)
    const data = await response.json().finally()
    setData(data)
  }
  useEffect(()=>{
    reqProducts()
  }, [])*/
  return (
    <div className='container'>
        <PedidoTitles/>
        <form className='formularioProductDefault'>
        <PedidoProductos/>
        <PedidoProductos/>
        <PedidoProductos/>
        <PedidoProductos/>
        <PedidoProductos/>
        <PedidoProductos/>
          {/*data.map((ele) => 
            <PedidoProductos Producto={ele}/>
            switch(ele.K_Dia){
              case 1: <PedidoProductos Producto={ele}/>
              break
              case 2: <PedidoProductos Producto={ele}/>
              break
              case 3: <PedidoProductos Producto={ele}/>
              break
              case 4: <PedidoProductos Producto={ele}/>
              break
              case 5: <PedidoProductos Producto={ele}/>
              break
              case 6: <PedidoProductos Producto={ele}/>
              break
              case 7: <PedidoProductos Producto={ele}/>
            break
              
            
          )*/}
          <div className='formulario-btn'>
            <Success Text="Guardar" /> 
          </div>
        </form>
    </div>
  )
}

export default PedidoDefault