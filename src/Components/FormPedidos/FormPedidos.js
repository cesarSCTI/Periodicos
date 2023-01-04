import React, {useState} from 'react'
import { Success } from '../Buttons/Buttons';
import ContentPopupPedido from '../ContentPopupPedido/ContentPopupPedido';
import Popup from '../Popup/Popup';
import PedidoProducts from './PedidoProducts';
import './FormPedidos.css';

const FormPedidos = ({PedidoData, orderInfo}) => {
    const [isOpen, setIsopen] = useState(false)

    const ActionPopup = (e) =>{
        e.preventDefault()
        if(isOpen){
            setIsopen(false)
        }else{
            setIsopen(true)
        }
    }

  return (
      <>
        <div className='container'>
            <form className='formPedidos'>
                <div className='inputsName'>
                    <div className='pedidoFicha'>
                        <label className='label'>Ficha Cliente</label>
                        <input type="text" className='input' defaultValue={orderInfo.K_Cliente}/>
                    </div>
                    <div className='pedidoNombre'>
                        <label className='label'>Nombre</label>
                        <input type="text" className='input' defaultValue={orderInfo.D_Cliente}/>
                    </div>
                </div>
                <div className='Table'>
                    <div className='d-60'>
                        <PedidoProducts listProducts={PedidoData} T1="Nombre" T2="Pedido" T3="Devoluciones" T4="Precio" T5="Total"/>
                    </div>
                    <div className='d-40 justifyRight'>
                        <label className='label'>Total a Pagar</label>
                        <input type="text" className='inputTotal' defaultValue={orderInfo.Total} />
                    </div>
                </div>
                <div className='Table'>
                    <Success Text="Generar Pedido"/>
                    <Success Text="Generar y pagar" F_Click={ActionPopup} />
                </div>
            </form>
        </div>
        {isOpen && <Popup> <ContentPopupPedido F_Click_Cerrar={ActionPopup} orderInfo={orderInfo}/> </Popup>}
    </>
  )
}
/**{
        "K_Cliente": "1",
        "D_Cliente": "Maria Isabel Medina Pereyra",
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
    } */
export default FormPedidos