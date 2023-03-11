import React, {useState} from "react"
import { usePedidoDefault } from "./usePedidoDefault"

const PedidoProductos = ({Producto}) => {
    const [data, setData] = useState(Object.values(Producto))
    const [dias, setDias] = useState(Object.keys(Producto))
    const {handleChangeProductsDaily} = usePedidoDefault();

  return (
    <div className='PedidoProduct'>
        <div className='d-25 '>{data[1]}</div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={data[2]} name={dias[2]} onChange={handleChangeProductsDaily}/>
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={data[3]} name={dias[3]} onChange={handleChangeProductsDaily}/>
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={data[4]} name={dias[4]} onChange={handleChangeProductsDaily}/>
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={data[5]} name={dias[5]} onChange={handleChangeProductsDaily}/>
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={data[6]} name={dias[6]} onChange={handleChangeProductsDaily}/>
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={data[7]} name={dias[7]} onChange={handleChangeProductsDaily}/>
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={data[8]} name={dias[8]} onChange={handleChangeProductsDaily}/>
        </div>
    </div>
  )
}

export default PedidoProductos
