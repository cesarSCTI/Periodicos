import { useState,useEffect } from "react";

export const usePetitionPedidosCobranza =() =>{
    //STATES
    const[Cobranza,setPedidos] = useState([])
    const[tablaPedidos,setTablaPedidos] = useState([])
    const[busqueda,setBusqueda] = useState([])
    //REQUEST
    const requestPedidosCobranza = async () => {
        const response = await fetch('https://api-rest-sist-periodico.deversite.com/pedidos_cobranza')
        const data = await response.json().finally()
        console.log(response);
        setPedidos(data)
        setTablaPedidos(data)
    }
    //  HANDLE & FILTER
    const handleBusqueda = (e) =>{
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    //  SEARCH
    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda = tablaPedidos.filter((elemento)=>{
            if(elemento.D_Cliente.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });
        console.log(resultadosBusqueda)
        setPedidos(resultadosBusqueda);
    }

    useEffect(()=>{
        requestPedidosCobranza()
    },[])

    return{tablaPedidos,Cobranza,setPedidos,handleBusqueda}
}