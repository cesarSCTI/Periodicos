import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export const useClientsPetition = () => {
    
    const navigate = useNavigate();
    const [Client, setClient] = useState([])
    const [tablaClient, setTablaClient] = useState([])
    const [busqueda, setBusqueda] = useState({})

    //REQUEST
    const requestClient = async () => {
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/clientes`)
        const data = await response.json().finally()
        setClient(data)
        setTablaClient(data)
    }

    //HANDLE
    const handleBusqueda = (e) =>{
        setBusqueda(e.target.value)
        filtrar(e.target.value);
    }

    //BUSQUEDA
    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaClient.filter((elemento)=>{
          if( elemento.Nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ){
            return elemento;
          }
        });
        console.log(resultadosBusqueda)
        setClient(resultadosBusqueda);
    }
    //ticketAdeudo
    const ticketAdeudo =() =>{
        navigate('/ticketAdeudo',{
            state:{
                items:Client
            }
        })
    }

    useEffect(()=>{
        requestClient()
    },[])

    return {tablaClient, Client, setClient, handleBusqueda,ticketAdeudo}
}

/*export const RequestAPI = (url) => {
    const [data, setData] = useState([])

    const request  = async (url) =>{
        const response = await fetch(url)
        const dataresponse = await response.json().finally()
        setData(dataresponse)
    }
    useEffect(()=>{
        request()
    }, [])
    return data
}*/