import React, {useState,Component} from 'react'
import { Success,Error } from '../Buttons/Buttons';
import ContentPopupPedido from '../ContentPopupPedido/ContentPopupPedido';
import { Link, NavigationType, useNavigate} from 'react-router-dom'
import axios from 'axios';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Popup from '../Popup/Popup';
import PedidoProducts from './PedidoProducts';
import './FormPedidos.css';
import { object } from 'yup';
import ContentPopupTicket from '../ContentPopupPedido/ContentPopupTicket';

const FormPedidos = ({PedidoData, orderInfo}) => {
    const[isOpen, setIsopen] = useState(false)
    const[popPupCancelar,setPopPupCancelar] = useState(false)
    const[popPupEliminar,setPopPupEliminar] = useState(false)
    const[popPupGuardar,setPopPupGuardar] = useState(false)
    const[popPupTicket,setPopPupTicket] = useState(false)
    //
    const [order,setOrder] = useState(orderInfo)
    const [products, setProducts] = useState(PedidoData)
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
    //  Calculo cantidad
    const handleOnChange = (e, a) =>{
      var Cantidad = 0;
      var TotalPedido = 0;
      let arr = e.target.name.split('_');
      const K_Producto = arr[1];
      Cantidad = e.target.value
      console.log("Cantidad: "+Cantidad)
      const newProduct = PedidoData.map(product =>{
        if(product.K_Producto==K_Producto){
            product.Total = `${(Number(Cantidad)*Number(product.PrecioUnitario))-(Number(product.Devoluciones)*Number(product.PrecioUnitario))}`
            product.Cantidad = `${Number(Cantidad)}`
        }
        TotalPedido += Number(product.Total)
        return product
      })
      orderInfo.Total_Pedido = TotalPedido
      orderInfo.Total = TotalPedido + Number(orderInfo.Adeudo)
      console.log(PedidoData)
      console.log(products)
      setProducts(newProduct)
      setOrder(orderInfo)
    }

    const handleChangeDev = (e,a) =>{
      let arr = e.target.name.split('_');
      var TotalPedido_Fin = 0
      console.log(e.target.name)
      console.log(PedidoData)
      const newProduct = PedidoData.map(product =>{
        if(product.K_Producto==arr[1]){
          product.Devoluciones = e.target.value
          product.Total = (Number(product.Cantidad)*Number(product.PrecioUnitario)) - (Number(e.target.value)*Number(product.PrecioUnitario))
        }
        TotalPedido_Fin += Number(product.Total)
        return product
      })
      /*
      for(let i = 0;i<PedidoData.length;i++){
        if(PedidoData[i].K_Producto==arr[1]){
          //console.log(arr[1])
          PedidoData[i].Devoluciones = e.target.value
          PedidoData[i].Total = (Number(PedidoData[i].Cantidad)*Number(PedidoData[i].PrecioUnitario)) - (Number(e.target.value)*Number(PedidoData[i].PrecioUnitario))
          console.log(PedidoData)
        }
        TotalPedido_Fin += Number(PedidoData[i].Total)
      }
      */
      setProducts(newProduct)
      //order.Total_Pedido = TotalPedido_Fin
      //order.Total = TotalPedido_Fin + Number(order.Adeudo)
      orderInfo.Total_Pedido = TotalPedido_Fin
      orderInfo.Total = TotalPedido_Fin + Number(order.Adeudo)
    }

    const guardarPedido = (pedido) =>{
      console.log(pedido)
      console.log('Det')
      
      var updatePedido = 
        {
          "K_Pedido":pedido.K_Pedido,
          "Total_Pedido":pedido.Total_Pedido,
          "Adeudo":pedido.Adeudo,
          "Total": pedido.Total,
          "Observaciones":pedido.Observaciones     
        }
      axios.post('https://api-rest-sist-periodico.deversite.com/pedido',new URLSearchParams(updatePedido),{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
      .then(function(responseJson){
        console.log(responseJson)
        if(responseJson.status == 200){
          updatePedidoDet(PedidoData)
        }
      })
      .catch(function(error){
        console.log(error)
      })
    }

    const updatePedidoDet = (PedidoDet) => {
      /*
      object{
            //"Nombre_Producto": "nuevo",
            //"K_Pedido_Detalle": "109",
            "K_Pedido": "66",
            "K_Producto": "20",
            "Cantidad": "1",
            "PrecioUnitario": "6.00",
            "Devoluciones": "0",
            "Total": "6"
      }
      correcto
      {
        "K_Pedido": "3",
        "K_Producto": 1,
        "Cantidad": "8",
        "PrecioUnitario": "11.00",
        "Devoluciones": "2",
        "Total": "66.00"
      }
      */
      PedidoDet.forEach(function(currentValue, index, arr){
        delete currentValue.Nombre_Producto
        delete currentValue.K_Pedido_Detalle
      })

      console.log(PedidoDet)

      axios.post('https://api-rest-sist-periodico.deversite.com/actualiza_pedido_detalle', PedidoDet,{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
      .then(function(response){
        console.log('response '+JSON.stringify(response));
        if(response.data.status == 200){
          navigate("../pedidos",{replace:true});
        }
      })
      .catch(function(error){
        console.log(error)
      }) 
    }

    
    const ticketPrint = () =>{
      console.log(PedidoData)
      navigate('/ticket', {
          state:{
            items:PedidoData
          }
        });
    }

    const ticketPrint_2 = () =>{
      console.log(PedidoData)
      navigate('/ticket_2', {
          state:{
            items:PedidoData,
            K_Pedido: orderInfo.K_Pedido,
            adeudo:orderInfo.Adeudo,
            pago:orderInfo.Pago_Abono,
            ficha:orderInfo.K_Cliente,
            cliente:orderInfo.D_Cliente,
            noPedido:orderInfo.K_Pedido
          }
        });
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
      popPupGuardar
      ?
      <Popup>
        <Header Text="¿Estas seguro de guardar los cambios?"/>
        <Loader/>
        <div className='d-100 comboBTNS'>
          <Error Text="No" F_Click={()=>setPopPupGuardar(false)}/>
          <Success Text="Si" F_Click={()=>guardarPedido(orderInfo)}/>
        </div>
      </Popup>
      :
      popPupTicket
      ?
      <Popup>
        <ContentPopupTicket K_Pedido={orderInfo.K_Pedido} orderInfo={orderInfo}/>
      </Popup>
      :
      <>
        <div className='container'>
            <form className='formPedidos'>
                <div className='inputsName'>
                    <div className='pedidoFicha'>
                        <label className='label'>Ficha Cliente</label>
                        <input type="text" className='input' defaultValue={orderInfo.K_Cliente} disabled/>
                    </div>
                    <div className='pedidoNombre'>
                        <label className='label'>Nombre</label>
                        <input type="text" className='input' defaultValue={orderInfo.D_Cliente} disabled/>
                    </div>
                </div>
                <div className='Table'>
                    <div className='d-60'>
                        {/*<PedidoProducts listProducts={PedidoData} T1="Nombre" T2="Pedido" T3="Devoluciones" T4="Precio" T5="Total"/>*/}
                        <div className='container'>
                            <div className='titulos'>
                                <div className='d-20'>Nombre</div>
                                <div className='d-20'>Pedido</div>
                                <div className='d-20'>Devoluciones</div>
                                <div className='d-20'>Precio</div>
                                <div className='d-20'>Total</div>
                            </div>
                            {
                                /*<PedidoProductsNuevos listProducts={PedidoData} Orders = {formData} T1="Nombre" T2="Pedido" T3="Devoluciones" T4="Precio" T5="Total"/>*/
                                PedidoData.map((ele) =>
                                <div className='contentProducts' key={ele.K_Producto}>
                                    <div className='d-20'>{ele.Nombre_Producto}</div>
                                    <div className='d-20'>
                                    <input type="text" name={"Cant_"+ele.K_Producto} className='inputProduct' defaultValue={ele.Cantidad} onChange={(name, value) => handleOnChange(name, value)} disabled = {orderInfo.Estatus == "PAGADO" ? 'disabled' : ''}/>
                                    </div>
                                    <div className='d-20'>
                                    <input type="text" name={"Dev_"+ele.K_Producto} className='inputProduct' defaultValue={ele.Devoluciones} onChange={handleChangeDev} disabled = {orderInfo.Estatus == "PAGADO" ? "disabled" : ""}/>
                                    </div>
                                    <div className='d-20'>
                                    <input type="text" refs={"Precio_"+ele.K_Producto} name={"Precio_"+ele.K_Producto} className='inputProduct' defaultValue={ele.PrecioUnitario} disabled/>
                                    </div>
                                    <div className='d-20'>
                                    <input type="text" name={"Total_"+ele.K_Producto} className='inputProduct' value={ele.Total} disabled/>
                                    </div>
                                </div>
                                
                                )
                            }
                        </div>
                        <div className='Table'>
                            <label className='label'>Observaciones</label>
                            <input type="text" className='input' defaultValue={orderInfo.Observaciones}/>
                        </div>
                    </div>
                    <div className='d-40 justifyRight'>
                        <label className='label'>Adeudo</label>
                        <input type="text" className='inputTotal' value={orderInfo.Adeudo}/>
                        <label className='label'>Subtotal a pagar del pedido</label>
                        <input type="text" className='inputTotal' value={orderInfo.Total_Pedido}/>
                        <label className='label'>Total a Pagar</label>
                        <input type="text" className='inputTotal' value={orderInfo.Total} />
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
                {/*<Success Text="Ticket" F_Click={ticketPrint}/>
                <Success Text="Ticket" F_Click={()=>setPopPupTicket(true)}/>*/}
                <Success Text="Ticket" F_Click={ticketPrint_2}/>
                <Error Text="Cancelar" F_Click={()=>setPopPupCancelar(true)} />
                </div>
                :orderInfo.Estatus == "GENERADO"
                ?<div className='Table'> 
                <Success Text="-Guardar" F_Click={()=>setPopPupGuardar(true)}/>
                <Success Text="Pagar" F_Click={ActionPopup} />
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