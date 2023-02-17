//import React, {useState,Component} from 'react'
import { useState,useEffect } from "react";
//import React, {useState} from 'react'
import { Success } from '../Buttons/Buttons';
//import ContentPopupPedido from '../ContentPopupPedido/ContentPopupPedido';
//import { Link, useNavigate } from 'react-router-dom'
//import axios from 'axios';
//import Header from '../Header/Header';
//import Loader from '../Loader/Loader';
//import Popup from '../Popup/Popup';
//import PedidoProducts from './PedidoProducts';
//import { URLSearchParams } from 'url'
import PedidoProductsNuevos from "./PedidoProductsNuevos";
import './FormPedidos.css';
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
//import { json } from "stream/consumers";

const FormPedidosNuevos = ({orderInfo,placeholder}) => {

    const [isOpen, setIsopen] = useState(false)
    const [vK_Cliente, setK_Cliente] = useState(0)
    const [PedidoData,setPedidosDefaultN] = useState([])
    //
    const [Client, setClient] = useState([])
    const [tablaClient, setTablaClient] = useState([])
    //
    const[busqueda,setBusqueda] = useState([])
    //const[K_Cliente_F,setClientF] = useState([])
    const[vTotal_Pedido,setTotal_Pedido] = useState(0)
    const[vAdeudo, setAdeudo] = useState(0)

    const navigate = useNavigate();

    const [formData,setformData] = useState({
        "K_Pedido":Number(orderInfo.K_Pedido),
        "K_Cliente":Number(orderInfo.K_Cliente),
        //"K_Nombre":Number(orderInfo.K_Cliente),
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
    }
    
    const ActionPopup = (e,K_Cliente,Adeudo) =>{
        e.preventDefault()
        console.log("ActionPopup "+K_Cliente)
        if(isOpen){
            setIsopen(false)
        }else{
            setIsopen(true)
            requestPedidoDefaultCD(K_Cliente,Adeudo)
            formData.K_Cliente = K_Cliente
            setK_Cliente(K_Cliente)
            console.log("K_Cliente_F "+formData.K_Cliente)
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
            formData.Total_Pedido = Total_Pedido
        }
    }
    //  Pedido Default
    const requestPedidoDefaultCD = async (K_Cliente,Adeudo)=>{
        //const date = new Date("December 5, 2022 01:15:00");
        const date = new Date();
        var NumDay = 1;//date.getDay();
        //if(NumDay==0){
        //    NumDay = 7
        //}
        console.log(K_Cliente)
        console.log(NumDay);
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/pedido_detalle_default_cd/${K_Cliente}/${NumDay}`)
        const data = await response.json().finally()
        console.log(response);
        setPedidosDefaultN(data);
        //
        /*
        const Total_Pedido = data.map((detalle) => parseFloat(detalle.Total))
            .reduce((previous, current) => {
                return previous + current;
            }, 0);
        console.log("Total_Pedido: "+Total_Pedido)
        setTotal_Pedido(Total_Pedido) 
        setAdeudo(Adeudo) 
        */
    }
    
    //   Buscador Cliente
    //  HANDLE & FILTER 
    const handleFilter = (e) =>{
        const searchWord = e.target.value;
        //setBusqueda(e.target.value)
        //filtrar(e.target.value)
        console.log("data "+searchWord);
        if(searchWord === ""){
        setBusqueda([])
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
        }else{
            setClient([])        
        }    
    }

    useEffect(()=>{
      //requestPedidosCobranza()
      requestClient()
      //requestPedidoDefaultCD(formData.K_Cliente,formData.Adeudo)
      //setTotal_Pedido(vTotal_Pedido)  
      //formData.K_Cliente = 
      setK_Cliente(formData.K_Cliente)
      setTotal_Pedido(formData.Total_Pedido) 
      formData.Adeudo = vAdeudo
      console.log('useEffect FormPN '+vAdeudo)
    },[formData])

    let Schema = yup.object().shape({
        Nombre: yup.string().required('campo obligatorio')
    });
    //  Crear Pedido
    const crearPedido = (e)=>{
        e.preventDefault()
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
            
            console.log(JSON.stringify(formData))
            console.log(PedidoData)
        
            axios.post('https://api-rest-sist-periodico.deversite.com/pedido',new URLSearchParams(formData),{
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
                navigate("../pedidos",{replace:true});
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

  return (
      <><form className='formPedidos' onSubmit={crearPedido} onChange={handleChange}>
        <div className='container'>
            
                <div className='inputsName'>
                    <div className='pedidoFicha'>
                        <label className='label'>Ficha Cliente</label>
                        <input type="text" name="K_Nombre" className='input' defaultValue={vK_Cliente}/>
                    </div>
                    <div className='pedidoNombre'>
                        <label className='label'>Nombre</label>
                        <input type="text" name="Nombre" className='input' defaultValue={orderInfo.D_Cliente}/>
                    </div>

                    <div className="search">
                        <div className="searchInputs">
                            <input
                            type="text" name="Nombre_Select"
                            placeholder={placeholder}
                            value={busqueda}
                            onChange={handleFilter}
                            />
                        </div>
                        {
                            Client.length !== 0 && (
                            <div className="dataResult">
                                {Client.slice(0, 15).map((value, key) => {
                                return (
                                    <a className="dataItem" onClick={event=>ActionPopup(event,value.K_Cliente,value.Adeudo)} >
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
                    {
                        isOpen &&<PedidoProductsNuevos listProducts={PedidoData} Orders = {formData} T1="Nombre" T2="Pedido" T3="Devoluciones" T4="Precio" T5="Total"/>
                    }
                        <div className='Table'>
                            <label className='label'>Observaciones</label>
                            <input type="text" className='input' defaultValue={orderInfo.Observaciones}/>
                        </div>
                    </div>
                    <div className='d-40 justifyRight'>
                        <label className='label'>Adeudo</label>
                        <input type="text" name="Adeudo" className='inputTotal' defaultValue={vAdeudo}/>
                        <label className='label'>Subtotal a pagar del pedido</label>
                        <input type="text" name="Total_Pedido" className='inputTotal' defaultValue={vTotal_Pedido}/>
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