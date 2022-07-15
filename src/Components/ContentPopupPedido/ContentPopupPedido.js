import React from 'react'
import { Error, Success } from '../Buttons/Buttons'
import Header from '../Header/Header'
import './ContentPopupPedido.css';
 
const ContentPopupPedido = ({F_Click_Cerrar}) => {
  return (
    <>
        <Header Text="Pago Pedido" >
            <Error Text="Cerrar" F_Click={F_Click_Cerrar}/>
        </Header>
        <div className='contentPago'>
          <div className='d-50'>
            <p>Adeudo</p>
            <div className='inputFail'>---</div>
            <p>Subtotal a pagar</p>
            <div className='inputFail'>---</div>
            <p>Total a Pagar</p>
            <div className='inputFail'>---</div>
          </div>
          <div className='d-50'>
            <form className='formPago'>
              <label>Pago</label>
              <input type="text" className='inputPago'/>
              <p>Adeudo final</p>
              <div className='inputFail'>---</div>
              <Success Text="Pagar" />
            </form>
            </div>
        </div>
    </>
  )
}

export default ContentPopupPedido