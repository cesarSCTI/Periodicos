import { useState, useEffect } from "react";

export const usePetitionPedidos = () =>{

    //STATES
    const [Pedidos, setPedidos] = useState([])
    const [tablaPedidos, setTablaPedidos] = useState([])
    const [busqueda, setBusqueda] = useState({})

    //REQUEST
    const requestPedidos = async () => {
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/pedidos`)
        const data = await response.json().finally()
        setPedidos(data)
        setTablaPedidos(data)
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

    useEffect(()=>{
        requestPedidos()
    },[])

    return {tablaPedidos, Pedidos, setPedidos, handleBusqueda}
 }