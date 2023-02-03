import React from 'react'
import './FormPedidos.css';

const PedidoProductsNuevos = ({ listProducts , T1, T2, T3, T4, T5}) => {
  return (
    <div className='container'>
      <div className='titulos'>
        <div className='d-20'>{T1}</div>
        <div className='d-20'>{T2}</div>
        <div className='d-20'>{T3}</div>
        <div className='d-20'>{T4}</div>
        <div className='d-20'>{T5}</div>
      </div>
      {listProducts.map((ele) =>
      <div className='contentProducts' key={ele.K_Producto}>
        <div className='d-20'>{ele.Nombre_Producto}</div>
        <div className='d-20'>
          <input type="text" name={ele.K_Producto} className='inputProduct' defaultValue={ele.Cantidad} />
        </div>
        <div className='d-20'>
          <input type="text" className='inputProduct' defaultValue={ele.Devoluciones} />
        </div>
        <div className='d-20'>
          <input type="text" className='inputProduct' defaultValue={ele.PrecioUnitario} />
        </div>
        <div className='d-20'>
          <input type="text" className='inputProduct' defaultValue={ele.Total} />
        </div>
      </div>
      )
      }
    </div>
  )
}
/**
 * {
        "Nombre_Producto": "Informador",
        "K_Pedido_Detalle": "1",
        "K_Pedido": "1",
        "K_Producto": "1",
        "Cantidad": "10",
        "PrecioUnitario": "11.00",
        "Devoluciones": "0",
        "Total": "110.00"
    }
 */
export default PedidoProductsNuevos