import React from 'react'
import { Opc } from '../Buttons/Buttons'
import { Link } from 'react-router-dom'
import './ListPedidos.css'

const ListPedidosItem = ({infoOrder}) => {
  return (
    <div className='container'>
        <div className='listNameBody border'>
          <div className='d-10'>#{infoOrder.K_Pedido}</div>
          <div className='d-20'>{infoOrder.D_Cliente}</div>
          <div className='d-10'>{infoOrder.Total}</div>
          <div className='d-20'>{infoOrder.F_Creacion}</div>
          <div className='d-20'>
           <span className='status'> Status </span>
          </div>
          <div className='d-20 opc'>
            <Link to={`/pedidos/${infoOrder.K_Pedido}`}><Opc Text="Ver" /></Link>
          </div>
        </div>
    </div>
  )
}
/*
{
        "K_Cliente": "1",
        "D_Cliente": "Isabel Medina",
        "F_Creacion": "Martes 2022-06-14 23:19:48",
        "K_Pedido": "1",
        "Total_Pedido": "416.00",
        "Adeudo": null,
        "Total": "416.00",
        "Pago_Abono": null,
        "Adeudo_Final": null,
        "F_Registro": "2022-06-14 23:19:48",
        "F_Actualizacion": null,
        "F_Pago": null,
        "K_Usuario_Captura": "2",
        "B_Pago": null,
        "K_Usuario_Pago": null,
        "B_Cancelado": null,
        "K_Usuario_Cancelo": null,
        "F_Cancelacion": null,
        "Observaciones": "Prueba Pedido Captura 1"
    },
 */
export default ListPedidosItem