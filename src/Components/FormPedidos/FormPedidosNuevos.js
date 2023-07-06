//import React, {useState,Component} from 'react'
import { useState,useEffect } from "react";
//import React, {useState} from 'react'
import { Success,Error } from '../Buttons/Buttons';
//import ContentPopupPedido from '../ContentPopupPedido/ContentPopupPedido';
//import { Link, useNavigate } from 'react-router-dom'
//import axios from 'axios';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Popup from '../Popup/Popup';
//import PedidoProducts from './PedidoProducts';
//import { URLSearchParams } from 'url'
import PedidoProductsNuevos from "./PedidoProductsNuevos";
import './FormPedidos.css';
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
//import { json } from "stream/consumers";
import { ErrorCancel, ErrorEliminar, Opc, SuccessPago, SuccessVer } from '../Buttons/Buttons'

import * as moment from 'moment'
const FormPedidosNuevos = ({orderInfo,placeholder}) => {

    const [isOpen, setIsopen] = useState(false)
    const [vK_Cliente, setK_Cliente] = useState(0)
    const [Ficha,setFicha] = useState(0)
    const [PedidoData,setPedidosDefaultN] = useState([])
    //
    const [Client, setClient] = useState([])
    const [tablaClient, setTablaClient] = useState([])
    //
    const[busqueda,setBusqueda] = useState([])
    //const[K_Cliente_F,setClientF] = useState([])
    const[vTotal_Pedido,setTotal_Pedido] = useState(0)
    const[vAdeudo, setAdeudo] = useState(0)
    //
    const[disabled, setDisabled] = useState(true)

    const[popPupMensajeProductos,setPopPupMensajeProductos] = useState(false);
    const[popPupGuardar,setPopPupGuardar] = useState(false);

    const [popPupMensajeInventario,setPopPupMensajeInventario] = useState(false)
    
    const navigate = useNavigate();

    var SumaTotalF = 0;
    var TotalF = 0;
    var TotalPedido = 0;

    const [order, setOrder] = useState(orderInfo)
    const [formData,setformData] = useState({
        "K_Pedido":Number(orderInfo.K_Pedido),
        "K_Cliente":Number(orderInfo.K_Cliente),
        //"K_Nombre":Number(orderInfo.K_Cliente),
        "Ficha":Number(orderInfo.Ficha),
        "Nombre": `${orderInfo.Nombre}`,
        "tes":PedidoData,
        "Adeudo":`${orderInfo.Adeudo}`,
        "Total_Pedido":`${orderInfo.Total_Pedido}`,
        "Total":`${orderInfo.Total}`,
        "K_Usuario_Captura":Number(orderInfo.K_Usuario_Captura),
        "Observaciones":`${orderInfo.Observaciones}`
    })
    
    const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    //const numweekday = ["Monday"=>1,"Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    //const[popPupCancelar,setPopPupCancelar] = useState(false)
    //const[popPupEliminar,setPopPupEliminar] = useState(false)
    //const navigate = useNavigate();

    //  Clientes
    //REQUEST
    const requestClient = async () => {
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/clientes`)
        const data = await response.json().finally()
        //setClient(data)
        setTablaClient(data)
        console.log("Clientes")
        console.log(data)
    }
    
    const ActionPopup = (K_Cliente,Ficha,Adeudo, D_Cliente) =>{
        //e.preventDefault()
        console.log("ActionPopup "+K_Cliente+" "+D_Cliente)
        if(isOpen){
            setIsopen(false)
            setBusqueda('')
        }else{
            setIsopen(true)
            setDisabled(false)
            requestPedidoDefaultCD(K_Cliente,Adeudo)
            console.log('test')
            console.log(PedidoData)
            /*
            if(PedidoData){
                setPopPupMensajeProductos(true)  
                return false             
            }
            */
            formData.K_Cliente = K_Cliente
            formData.Nombre = D_Cliente
            formData.Ficha = Ficha
            order.K_Cliente = K_Cliente
            order.Nombre = D_Cliente
            order.Ficha = Ficha
            setBusqueda(D_Cliente)
            setK_Cliente(K_Cliente)
            setFicha(Ficha)

            console.log("K_Cliente_F "+formData.K_Cliente)
            console.log("Total "+formData.Total_Pedido)
            //setClientF(K_Cliente)
            const Total_Pedido = PedidoData.map((detalle) => parseFloat(detalle.Total))
                .reduce((previous, current) => {
                    return previous + current;
            }, 0);
            console.log("Total_Pedido: "+Total_Pedido)
            console.log("Adeudo: "+Adeudo)
            setTotal_Pedido(Total_Pedido) 
            setAdeudo(Adeudo) 
            formData.Adeudo = Adeudo
            //formData.Total_Pedido = Total_Pedido
            //order.Total_Pedido = formData.Total_Pedido
            order.Adeudo = Adeudo
            PedidoData.map(product => {
                TotalPedido += Number(product.Total)
              })
            console.log("Total inicial "+TotalPedido)
            console.log("Total inicial 2 "+vTotal_Pedido)
            order.Total_Pedido = TotalPedido
            order.Total = TotalPedido + Number(Adeudo)
            formData.Total_Pedido = TotalPedido
            formData.Total = TotalPedido + Number(Adeudo)
            setOrder(order)
            console.log(order)
            console.log(formData)
        }
    }
    //  Pedido Default
    const  requestPedidoDefaultCD = async (K_Cliente,Adeudo)=>{
        //const date = new Date("December 5, 2022 01:15:00");
        console.log('function requestPedidoDefaultCD')
        const date = new Date();
        var NumDay = date.getDay();
        if(NumDay==0){
            NumDay = 7
        }
        console.log(K_Cliente)
        console.log(NumDay);
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/pedido_detalle_default_cd/${K_Cliente}/${NumDay}`)
        const data = await response.json().finally()
        console.log('function requestPedidoDefaultCD')
        console.log(data);
        setPedidosDefaultN(data);
        console.log('next')
        console.log(PedidoData)
        ///return data
        //
        if(data.length>0)
        {
        
            const Total_Pedido = data.map((detalle) => parseFloat(detalle.Total))
                .reduce((previous, current) => {
                    return previous + current;
                }, 0);
            console.log("requestPedidoDefaultCD Total_Pedido: "+Total_Pedido)
            formData.Total_Pedido = Total_Pedido
            order.Total_Pedido = Total_Pedido
            order.Total = Number(Total_Pedido) + Number(Adeudo)
            console.log(formData)
            console.log(order)
            setTotal_Pedido(Total_Pedido) 
            //setAdeudo(Adeudo) 
        }
    }
    
    //   Buscador Cliente
    //  HANDLE & FILTER 
    const handleFilter = (e) =>{
        const searchWord = e.target.value;
        //setBusqueda(e.target.value)
        //filtrar(e.target.value)
        console.log("data "+searchWord);
        if(searchWord === ""){
            //setBusqueda([])
            formData.K_Cliente = 0
            setPedidosDefaultN({})
        }else{
            setBusqueda(searchWord)
            filtrar(searchWord)
        }
    }
  
    //  SEARCH
    const filtrar=(terminoBusqueda)=>{
        if(terminoBusqueda!==""){
            var resultadosBusqueda = tablaClient.filter((elemento)=>{
                if(elemento.Nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                    return elemento;
                }
            });
            console.log(resultadosBusqueda)
            setClient(resultadosBusqueda);
            setDisabled(true)
        }else{
            setClient([])    
            setPedidosDefaultN({})   
        }    
    }

    useEffect(()=>{
      //requestPedidosCobranza()
      requestInventario()
      requestClient()
      //requestPedidoDefaultCD(formData.K_Cliente,formData.Adeudo)
      //setTotal_Pedido(vTotal_Pedido)  
      //formData.K_Cliente = 
      setK_Cliente(formData.K_Cliente)
      setTotal_Pedido(formData.Total_Pedido) 
      setFicha(formData.Ficha)
      formData.Adeudo = vAdeudo
      console.log('useEffect FormPN '+vAdeudo)
    },[formData])

    let Schema = yup.object().shape({
        Nombre: yup.string().required('campo obligatorio')
    });
    //  Crear Pedido
    const crearPedido = (e)=>{
        e.preventDefault()
        if (e.key !== "Enter") {            
            //requestInventario();
            const validacion = Schema.isValid(formData)
            if(validacion){ 
                console.log("Ante "+PedidoData)

                PedidoData.forEach(function(currentValue, index, arr){
                    console.log(currentValue)
                    console.log(index)
                    console.log(arr)
                    delete arr.Nombre_Producto
                    delete currentValue.Nombre_Producto
                    delete currentValue.K_Cliente
                    //currentValue.K_Pedido = 56
                    console.log(arr)
                })    

                console.log("Update "+PedidoData)
                console.log("Nuevo Pedido")
                console.log(formData)
                console.log(JSON.stringify(formData))
                console.log(PedidoData)
                console.log("order")
                console.log(order)
            
                axios.post('https://api-rest-sist-periodico.deversite.com/pedido',new URLSearchParams(order),{
                    headers:{
                        'Content-Type':'application/x-www-form-urlencoded'
                    }
                })
                .then(function(responseJson){
                    console.log('response '+responseJson);
                    if(responseJson.status == 200){
                        console.log("K_Pedido "+responseJson.data.K_Pedido)
                        //  Quitar nombre y agregar pedido
                        
                        PedidoData.forEach(function(currentValue, index, arr){
                            console.log(currentValue)
                            delete currentValue.Nombre_Producto
                            currentValue.K_Pedido = `${responseJson.data.K_Pedido}`
                            console.log(arr)
                        })

                        console.log("update pedido")
                        console.log(JSON.stringify(PedidoData));
                        
                        //  Agregar Pedido Detalle
                        crearPdidoDetalle(PedidoData)
                        
                        /*
                        axios.post('https://api-rest-sist-periodico.deversite.com/crear_pedido_detalle',new URLSearchParams(PedidoData),{
                        /*    
                        headers:{
                                'Content-Type':'application/x-www-form-urlencoded'
                            }
                        */
                        /*    headers:{
                            }
                        })
                        .then(function(response){
                            console.log('response '+response.data);
                            if(response.status == 200){
                                navigate("../pedidos",{replace:true});
                            }
                        })
                        .catch(function(error){
                            console.log(error)
                        })    
                        */                     
                    }                
                })
                .catch(function(error){
                    console.log(error)
                })      
            }
        }
    }

    const crearPdidoDetalle = (PedidoData2) => {
        axios.post('https://api-rest-sist-periodico.deversite.com/crear_pedido_detalle',PedidoData2,{
            
        headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        /*
            headers: {
                'Content-Type': 'application/json'
            }
        */
        })
        .then(function(response){
            console.log('response '+JSON.stringify(response));
            
            if(response.data.status == 200){
                setPopPupGuardar(true)
                //navigate("../pedidos",{replace:true});
            }
            
        })
        .catch(function(error){
            console.log(error)
        })                    
    }

    const handleChange = (e) => {
        setformData({
          ...formData,
          [e.target.name]: e.target.value
        })
        console.log("handleChange "+formData)
      }
    
      const handleOnChange = (e, a) =>{        
        let arr = e.target.name.split('_');
        console.log("cant_"+arr[1]+" "+e.target.value);
        console.log("cant 2 "+e.target.name);
        SumaTotalF = e.target.value
        console.log("SumaTotalF "+SumaTotalF)
        //setSumaTotal(Number(SumaTotalF)+10)
        //console.log(this.refs.Precio_17)
        //console.log(this.state.Precio_17)
        //console.log(products)
        //console.log(order)
        const newProduct = PedidoData.map(product => {
          console.log("w")
          console.log(product.K_Producto)
          
          if(product.K_Producto==arr[1]){
            console.log("q")
            product.Total = `${(Number(SumaTotalF)*Number(product.PrecioUnitario))-(Number(product.Devoluciones)*Number(product.PrecioUnitario))}`
            product.Cantidad = `${Number(SumaTotalF)}`
            }
          TotalPedido+= Number(product.Total)
          return product;
          console.log("PREcio "+ product.PrecioUnitario)
        })
        console.log(TotalPedido)
        console.log(newProduct)
        order.Total_Pedido = TotalPedido
        order.Total = TotalPedido + Number(order.Adeudo)
        formData.Total_Pedido = TotalPedido
        formData.Total= TotalPedido + Number(order.Adeudo)
        //setProducts(newProduct)
        /*
        const PedidoData2 = orderInfo.forEach(function(currentValue, index, arr){
          console.log(currentValue)
          currentValue.Total = TotalF
          console.log(arr)
        })
        */        
    /*    order.Total = TotalF
        console.log(order)
    */ 
        setOrder(order)
        console.log(order)
        console.log(formData)
      }
        // Ficha
        const handleChangeFicha = (e) =>{
            console.log(e.key)
            if (e.key === "Tab") {
                console.log(e.target.value)
                filtrarPorFicha(e.target.value)
            }
            if(e.key === "Backspace"||e.key === "Delete")
            {
                console.log(e.key)
                setIsopen(false)
                setBusqueda('')
            }
        }
        //  Filtra
        const filtrarPorFicha=(ficha)=>{
            if(ficha>0){
                var resultadosBusqueda = tablaClient.filter((elemento)=>{
                    if(elemento.Ficha == ficha){
                        return elemento;
                    }
                })
                console.log(resultadosBusqueda)
                if(resultadosBusqueda.length>0){
                    ActionPopup(resultadosBusqueda[0].K_Cliente,resultadosBusqueda[0].Ficha,resultadosBusqueda[0].Adeudo,resultadosBusqueda[0].Nombre+' '+resultadosBusqueda[0].Apellidos)
                }else{
                    setIsopen(false)
                    setBusqueda('')
                }
            }
            if(ficha==0||ficha==''){
                setIsopen(false)
                setBusqueda('')
            }
            
        }

      // Devoluciones
      const handleChangeDev = (e,a) =>{
        let arr = e.target.name.split('_');
        var aux = [...PedidoData]
        var TotalPedido_Fin = 0
        console.log(e.target.name)
        console.log(PedidoData)
        for(let i = 0;i<PedidoData.length;i++){
            if(PedidoData[i].K_Producto==arr[1]){
                PedidoData[i].Devoluciones = e.target.value
                PedidoData[i].Total = (Number(PedidoData[i].Cantidad)*Number(PedidoData[i].PrecioUnitario)) - (Number(e.target.value)*Number(PedidoData[i].PrecioUnitario))
                //console.log(PedidoData[i])
            }
            TotalPedido_Fin += Number(PedidoData[i].Total)
        }
        order.Total_Pedido = TotalPedido_Fin
        order.Total = TotalPedido_Fin + Number(order.Adeudo)
      }

      const clearInput = () => {
        setClient([])
        setBusqueda("")
        //setFilteredData([]);
        //setWordEntered("");
      };

      const closeMensaje = () =>{
        setPopPupGuardar(false)
        navigate("../pedidos",{replace:true});
    }

    const closeMensajeInv = () =>{
        setPopPupMensajeInventario(false)
        navigate("../pedidos",{replace:true});
    }

    const requestInventario = async()=>{
        //const dat = new Date("April 15, 2023 01:15:00");
        const  dat = new Date();
        let dateAct = moment(dat).format('YYYY-MM-DD')
        console.log(dateAct)
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/inventario_dia/${dateAct}`)
        const data = await response.json().finally()
        console.log(data)
        if(data.length==0){
            setPopPupMensajeInventario(true)
        }
        /*
        if(data.length>0){
            setExist(true)
            //setformData(data)
            //createObj()
            console.log("requestInventario")
            setInventarioAct(data)
        }
        */
    }
      
  return (
        popPupMensajeInventario
        ?
        <Popup>
            <Header Text="Es necesario la captura del Invetario Diaro para continuar...!"/>
            <Loader/>
            <div className='d-100 comboBTNS'>
                <Error Text="Aceptar" F_Click={()=>closeMensajeInv()}/>
            </div>
        </Popup>
        :
        popPupMensajeProductos
        ?
        <Popup>
        <Header Text="El Cliente no cuenta con productos default. Es necesario darlos de alta."/>
        <Loader/>
            <div className = "d-100 comboBTNS">
            <Error Text="Aceptar" F_Click={()=>setPopPupMensajeProductos(false)}/>
            </div>
        </Popup>
        :
        popPupGuardar
        ?
        <Popup>
            <Header Text="El Pedido fue registrado correctamente...!"/>
            <Loader/>
            <div className='d-100 comboBTNS'>
                <Error Text="Aceptar" F_Click={()=>closeMensaje()}/>
            </div>
        </Popup>
        :
      <><form className='formPedidos' onSubmit={crearPedido} onChange={handleChange}>
        <div className='container'>
            
                <div className='inputsName'>
                    <div className='pedidoFicha'>
                        <label className='label'>Ficha Cliente</label>
                        <input type="text" name="K_Nombre" className='input' defaultValue={Ficha} onKeyDown={handleChangeFicha} /*value={Ficha}*//>
                    </div>
                    {
                    /*
                    <div className='pedidoNombre'>
                        <label className='label'>Nombre</label>
                        <input type="text" name="Nombre" className='input' defaultValue={orderInfo.D_Cliente}/>
                    </div>
                    */
                    }
                    <div className="pedidoNombre">
                        {/*<div className="searchInputs">*/}
                            <label className='label'>Nombre</label>
                            <input
                                type="text" name="Nombre" className="input"
                                placeholder={placeholder}
                                value={busqueda}
                                onChange={handleFilter}
                            />
                        {/*</div>*/}
                        {
                            Client.length !== 0 && (
                            <div className="dataResult" style={{display: disabled ? "block" : "none"}}>
                                {Client.slice(0, 15).map((value, key) => {
                                return (
                                    <a className="dataItem" onClick={event=>ActionPopup(value.K_Cliente,value.Ficha,value.Adeudo,value.Nombre+' '+value.Apellidos)} >
                                    <p>{value.Nombre+' '+value.Apellidos} </p>
                                    </a>
                                );
                                })}
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className='Table'>
                    <div className='d-60'>
                    
                        
                        <div className='container'>
                            <div className='titulos'>
                                <div className='d-20'>Nombre</div>
                                <div className='d-20'>Pedido</div>
                                <div className='d-20'>Devoluciones</div>
                                <div className='d-20'>Precio</div>
                                <div className='d-20'>Total</div>
                            </div>

                            {
                            isOpen 
                            &&
                            <div>
                            {
                                /*<PedidoProductsNuevos listProducts={PedidoData} Orders = {formData} T1="Nombre" T2="Pedido" T3="Devoluciones" T4="Precio" T5="Total"/>*/
                                PedidoData.length>0
                                ?
                                PedidoData.map((ele) =>
                                <div className='contentProducts' key={ele.K_Producto}>
                                    <div className='d-20'>{ele.Nombre_Producto}</div>
                                    <div className='d-20'>
                                    <input type="text" name={"Cant_"+ele.K_Producto} className='inputProduct' defaultValue={ele.Cantidad} onChange={(name, value) => handleOnChange(name, value)}/>
                                    </div>
                                    <div className='d-20'>
                                    <input type="text" name={"Dev_"+ele.K_Producto} className='inputProduct' defaultValue={ele.Devoluciones} onChange={handleChangeDev}/>
                                    </div>
                                    <div className='d-20'>
                                    <input type="text" refs={"Precio_"+ele.K_Producto} name={"Precio_"+ele.K_Producto} className='inputProduct' defaultValue={ele.PrecioUnitario} disabled/>
                                    </div>
                                    <div className='d-20'>
                                    <input type="text" name={"Total_"+ele.K_Producto} className='inputProduct' value={ele.Total} disabled/>
                                    </div>
                                </div>                              
                                
                                )
                                :<></>
                            }
                            </div>
                            }
                        </div>
                    
                        <div className='Table'>
                            <label className='label'>Observaciones</label>
                            <input type="text" className='input' value={orderInfo.Observaciones}/>
                        </div>
                    </div>
                    <div className='d-40 justifyRight'>
                        <label className='label'>Adeudo</label>
                        <input type="text" name="Adeudo" className='inputTotal' value={orderInfo.Adeudo}/>
                        <label className='label'>Subtotal a pagar del pedido</label>
                        <input type="text" name="Total_Pedido" className='inputTotal' value={orderInfo.Total_Pedido}/>
                        <label className='label'>Total a Pagar</label>
                        <input type="text" name="Total" className='inputTotal' value={orderInfo.Total} />
                    </div>
                </div>
            
        </div>
        <div className='container'>
            <div className='Table'>
            {
                <div className='Table'> 
                <Success Text="Generar Pedido"/>
                </div>
              /*
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
                */
               //isOpen &&<PedidoProductsNuevos listProducts={PedidoData} T1="Nombre" T2="Pedido" T3="Devoluciones" T4="Precio" T5="Total"/>

            }
            </div>
        </div>
        </form>
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
export default FormPedidosNuevos