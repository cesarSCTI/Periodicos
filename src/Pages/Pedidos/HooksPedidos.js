import { useState, useEffect } from "react";

export const usePetitionPedidos = () =>{

    //STATES
    const [Pedidos, setPedidos] = useState([])
    const [tablaPedidos, setTablaPedidos] = useState([])
    const [busqueda, setBusqueda] = useState({})
    const [data,setData] = useState([])

    //REQUEST
    const requestPedidos = async () => {
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/pedidos_dia`)
        const data = await response.json().finally()
        setPedidos(data)
        setTablaPedidos(data)
        console.log("Pedidos")
        console.log(data)
    }

    //HANDLE & FILTER
    const handleBusqueda = (e) =>{
        setBusqueda(e.target.value)
        filtrar(e.target.value);
    }

    //SEARCH
    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaPedidos.filter((elemento)=>{
          if( elemento.D_Cliente.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ){
            return elemento;
          }
        });
        console.log(resultadosBusqueda)
        setPedidos(resultadosBusqueda);
    }

    const fechasHandle = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log("fechasHandle")
        console.log(data)
    }

    const fechasSend = async (e)=>{
        e.preventDefault()
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/pedidos_fecha/${data.date1}/${data.date2}`);
        const dato = await response.json().finally()
        setPedidos(dato)
        setTablaPedidos(dato)
        console.log(dato)
    }

    useEffect(()=>{
        requestPedidos()
    },[])

    return {tablaPedidos, Pedidos, setPedidos, handleBusqueda,fechasHandle,fechasSend}
 }