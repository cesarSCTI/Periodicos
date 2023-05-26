import React,{useState} from 'react'
import { ErrorCancel, ErrorEliminar, Opc, SuccessPago, SuccessTicket, SuccessVer } from '../Buttons/Buttons'
import { Link, useNavigate } from 'react-router-dom'
import './ListPedidos.css'
import { Error,Success } from '../Buttons/Buttons'
import axios from 'axios'
//import { URLSearchParams } from 'url'
import Header from '../Header/Header'
import Loader from '../Loader/Loader'
import Popup from '../Popup/Popup'
import ContentPopupPedido from '../ContentPopupPedido/ContentPopupPedido'

const ListPedidosItem = ({infoOrder}) => {
  const[popPupCancelar,setPopPupCancelar] = useState(false)
  const[popPupEliminar,setPopPupEliminar] = useState(false)
  const[isOpen,setIsopen] = useState(false)
  const navigate = useNavigate();

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
        //navigate("../pedidos",{replace:true});
        navigate("../", { replace: true });
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
        navigate("../",{replace:true});
        //navigate(-1, { replace: true });
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const login =(pedido) =>{
    axios.get(`https://api-rest-sist-periodico.deversite.com/api/login/alan/12345`)
    .then(function(response){
      console.log(response);
      /*
      if(response.status == 200){
        setPopPupCancelar(false)
        navigate("../pedidos",{replace:true});
      }*/
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const ActionPopup = (e) =>{
    e.preventDefault()
    if(isOpen){
        setIsopen(false)
    }else{
        setIsopen(true)
    }
  }

  const ticketPrint_2 = () =>{
    //console.log(PedidoData)
    navigate('/ticket_2', {
        state:{
          //items:PedidoData,
          K_Pedido: infoOrder.K_Pedido,
          adeudo:infoOrder.Adeudo,
          pago:infoOrder.Pago_Abono,
          ficha:infoOrder.K_Cliente,
          cliente:infoOrder.D_Cliente,
          noPedido:infoOrder.K_Pedido
        }
      });
  }

  /*
  const eliminarPedido =(pedido) =>{
    fetch(`https://api-rest-sist-periodico.deversite.com/eliminar_pedido/${pedido}`,{
      method:'POST'
    })
    .finally(
      ()=>{
        navigate("../pedidos",{replace:true});
      }
    )
  } 
  */
  

  return (
    <>
    {
      popPupCancelar
      ?<Popup>
        <Header Text="¿Estas seguro de cancelar este pedido?"/>
        <Loader/>
        <div className = "d-100 comboBTNS">
          <Error Text="No" F_Click={()=>setPopPupCancelar(false)}/>
          <Success Text="Si" F_Click={()=>cancelarPedido(infoOrder.K_Pedido)}/>
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
          <Success Text="Si" F_Click={()=>eliminarPedido(infoOrder.K_Pedido)}/>
        </div>

      </Popup>
      :
      <>
        <div className='container'>
          <div className='listNameBody border'>
            <div className='d-10'>#{infoOrder.K_Pedido}</div>
            <div className='d-20'>{infoOrder.D_Cliente}</div>
            <div className='d-10'>{infoOrder.Total}</div>
            <div className='d-20'>{infoOrder.F_Creacion}</div>
            <div className='d-20'>
            {
              infoOrder.Estatus == "PAGADO"
              ?<span className='status-pagado'>{infoOrder.Estatus}</span>
              :infoOrder.Estatus == "GENERADO"
              ?<span className='status-generado'>{infoOrder.Estatus}</span>
              :<span className='status-cancelado'>{infoOrder.Estatus}</span>
            }
            </div>
            <div className='d-20 opc'>
              
              <Link to={`/pedidos/${infoOrder.K_Pedido}`}><SuccessVer/></Link>
              {
                //<SuccessVer F_Click={ActionPopup}/>
                //<Link to={`/pedidos/${infoOrder.K_Pedido}`}><SuccessVer/></Link>
                infoOrder.Estatus == "GENERADO"
                ?<SuccessPago F_Click={ActionPopup}/>
                :<></>
                //<Link to={`https://api-rest-sist-periodico.deversite.com/login/alan/12345`}><SuccessVer/></Link>
              }
              {
                infoOrder.Estatus == "PAGADO"
                ?<SuccessTicket F_Click={ticketPrint_2}/>
                :<></>
              }
              {
                infoOrder.Estatus == "GENERADO" || infoOrder.Estatus == "PAGADO"
                ?<ErrorCancel F_Click={()=>setPopPupCancelar(true)}/>
                :<></>
              }
              <ErrorEliminar F_Click={()=>setPopPupEliminar(true)}/>
              
            </div>
          </div>
        </div>
        {isOpen && <Popup><ContentPopupPedido F_Click_Cerrar={ActionPopup} orderInfo = {infoOrder}/></Popup>}
      </>
    }
    </>
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