import React from "react"

const PedidoProductos = ({Producto}) => {
  return (
    <div className='PedidoProduct'>
        <div className='d-25 '>{Producto.D_Producto} {Producto.D_Dia}</div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={Producto.CantidadDia_Lunes} />
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={Producto.CantidadDia_Martes} />
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={Producto.CantidadDia_Miercoles} />
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={Producto.CantidadDia_Jueves} />
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={Producto.CantidadDia_Viernes} />
        </div>
        <div className='d-12-5'>
            <input type="text" className='inputCant' defaultValue={Producto.CantidadDia_Sabado} />
        </div>
        <div className='d-12-5'>
        <input type="text" className='inputCant' defaultValue={Producto.CantidadDia_Domingo} />
        </div>
    </div>
  )
}

export default PedidoProductos
