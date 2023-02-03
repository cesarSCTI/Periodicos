import React, {useState,Component} from 'react'
import { Success,Error } from '../Buttons/Buttons';
import ContentPopupPedido from '../ContentPopupPedido/ContentPopupPedido';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Popup from '../Popup/Popup';
import PedidoProducts from './PedidoProducts';
import './FormPedidos.css';

const FormPedidos = ({PedidoData, orderInfo}) => {
    const [isOpen, setIsopen] = useState(false)
    const[popPupCancelar,setPopPupCancelar] = useState(false)
    const[popPupEliminar,setPopPupEliminar] = useState(false)
    const navigate = useNavigate();

    const ActionPopup = (e) =>{
        e.preventDefault()
        if(isOpen){
            setIsopen(false)
        }else{
            setIsopen(true)
        }
    }

    var Usuario_Cancelo = {
        'K_Usuario_Cancelo':1
    }

    const cancelarPedido = (pedido) =>{
        axios.post(`https://api-rest-sist-periodico.deversite.com/cancelar_pedido/${pedido}`, new URLSearchParams(Usuario_Cancelo),{
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          }
        })
        .then(function(response){
          console.log(response);
          if(response.status == 200){
            setPopPupCancelar(false)
            navigate("../pedidos",{replace:true});
          }
        })
        .catch(function(error){
          console.log(error);
        })
        /*
        .finally(
          ()=>{
            navigate("../pedidos",{replace:true});
          }
        )
        */
      }

      const eliminarPedido =(pedido) =>{
        axios.post(`https://api-rest-sist-periodico.deversite.com/eliminar_pedido/${pedido}`)
        .then(function(response){
          console.log(response);
          if(response.status == 200){
            setPopPupCancelar(false)
            navigate("../pedidos",{replace:true});
          }
        })
        .catch(function(error){
          console.log(error);
        })
      }

  return (
    popPupCancelar
      ?<Popup>
        <Header Text="¿Estas seguro de cancelar este pedido?"/>
        <Loader/>
        <div className = "d-100 comboBTNS">
          <Error Text="No" F_Click={()=>setPopPupCancelar(false)}/>
          <Success Text="Si" F_Click={()=>cancelarPedido(orderInfo.K_Pedido)}/>
        </div>
      </Popup>
      :
      popPupEliminar
      ?
      <Popup>
        <Header Text="¿Estas seguro de eliminar este pedido?"/>
        <Loader/>
        <div className = "d-100 comboBTNS">
          <Error Text="No" F_Click={()=>setPopPupEliminar(false)}/>
          <Success Text="Si" F_Click={()=>eliminarPedido(orderInfo.K_Pedido)}/>
        </div>

      </Popup>
      :
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
                        <div className='Table'>
                            <label className='label'>Observaciones</label>
                            <input type="text" className='input' defaultValue={orderInfo.Observaciones}/>
                        </div>
                    </div>
                    <div className='d-40 justifyRight'>
                        <label className='label'>Adeudo</label>
                        <input type="text" className='inputTotal' defaultValue={orderInfo.Adeudo}/>
                        <label className='label'>Subtotal a pagar del pedido</label>
                        <input type="text" className='inputTotal' defaultValue={orderInfo.Total_Pedido}/>
                        <label className='label'>Total a Pagar</label>
                        <input type="text" className='inputTotal' defaultValue={orderInfo.Total} />
                        {
                            orderInfo.Estatus == "PAGADO"
                            ?<>
                            <label className='label'>Pago</label>
                            <input type="text" className='inputTotal' defaultValue={orderInfo.Pago_Abono} />
                            <label className='label'>Adeudo Final</label>
                            <input type="text" className='inputTotal' defaultValue={orderInfo.Adeudo_Final} />
                            </>
                            :<></>
                        }
                    </div>
                </div>
                
            </form>
        </div>
        <div className='container'>
            <div className='Table'>
            {
                orderInfo.Estatus == "PAGADO"
                ?<div className='Table'> 
                <Success Text="Ticket"/>
                <Error Text="Cancelar" F_Click={()=>setPopPupCancelar(true)} />
                </div>
                :orderInfo.Estatus == "GENERADO"
                ?<div className='Table'> 
                <Success Text="Generar Pedido"/>
                <Success Text="Generar y Pagar" F_Click={ActionPopup} />
                </div>
                :orderInfo.Estatus == "CANCELADO"
                ?<div className='Table'> 
                <Error Text="Eliminar" F_Click={()=>setPopPupEliminar(true)} />
                </div>
                :<></>
            }
            </div>
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