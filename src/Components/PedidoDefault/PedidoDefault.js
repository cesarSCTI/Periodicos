import React,{useState, useEffect} from 'react'
import { Success } from '../Buttons/Buttons'
import PedidoProductos from './PedidoProductos'
import PedidoTitles from './PedidoTitles'

const PedidoDefault = ({ClienteID}) => {
  const [data, setData] = useState([])

  const reqProducts = async () =>{
    const response = await fetch(`https://api-rest-sist-periodico.deversite.com/productos_dia_default`)
    const data = await response.json().finally()
    setData(data)
  }
  useEffect(()=>{
    reqProducts()
  }, [])
  return (
    <div className='container'>
       <PedidoTitles/>
        <form className='formularioProductDefault'>
          {data.map((ele) => 
            <PedidoProductos Producto={ele}/>
          )}
          <div className='formulario-btn'>
            <Success Text="Guardar" /> 
          </div>
        </form>
    </div>
  )
}

export default PedidoDefault