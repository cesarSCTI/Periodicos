import React,  { useState } from "react"

const PedidoProductos = ({Producto}) => {

    const [Product, setProduct] = useState(Producto)

  return (
    <div className='PedidoProduct'>
        <div className='d-25 '>Nombre</div>
        <div className='d-12-5'>
            <input type="text" className='inputCant'/>
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant'/>
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant'/>
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant'/>
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant'/>
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant'/>
        </div>
        <div className='d-12-5'>
        <input type="text" className='inputCant'/>
        </div>
    </div>
  )
}

export default PedidoProductos