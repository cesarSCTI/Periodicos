import React, {useState} from 'react'
import { Success } from '../Buttons/Buttons';
import ContentPopupPedido from '../ContentPopupPedido/ContentPopupPedido';
import Popup from '../Popup/Popup';
import './FormPedidos.css';
import PedidoProducts from './PedidoProducts';

const FormPedidos = ({PedidoData}) => {
    const [isOpen, setIsopen] = useState(false)
    const ActionPopup = () =>{
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
                    <label className='label'>Ficha</label>
                    <input type="text" className='input' />
                </div>
                <div className='pedidoNombre'>
                    <label className='label'>Nombre</label>
                    <input type="text" className='input'/>
                </div>
            </div>
            <div className='Table'>
                <div className='d-60'>
                    <PedidoProducts />
                </div>
                <div className='d-40 justifyRight'>
                    <label className='label'>Total a Pagar</label>
                    <input type="text" className='inputTotal'/>
                </div>
            </div>
            <div className='Table'>
                <Success Text="Generar Pedido"/>
                <Success Text="Generar y pagar" F_Click={ActionPopup} />
            </div>
        </form>
    </div>
    {isOpen && <Popup> <ContentPopupPedido F_Click_Cerrar={ActionPopup}/> </Popup>}
    
    </>
  )
}

export default FormPedidos