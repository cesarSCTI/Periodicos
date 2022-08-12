import {useEffect, useState} from "react";

export const useProductPetition = () => {
    
    const [Productos, setProductos] = useState([])
    const [tablaProductos, setTablaProductos] = useState([])
    const [busqueda, setBusqueda] = useState({})

    //REQUEST
    const requestProductos = async () => {
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/productos`)
        const data = await response.json().finally()
        setProductos(data)
        setTablaProductos(data)
    }

    //HANDLE
    const handleBusqueda = (e) =>{
        setBusqueda(e.target.value)
        filtrar(e.target.value);
    }

    //BUSQUEDA
    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaProductos.filter((elemento)=>{
          if( elemento.Nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ){
            return elemento;
          }
        });
        console.log(resultadosBusqueda)
        setProductos(resultadosBusqueda);
    }

    useEffect(()=>{
        requestProductos()
    },[])

    return {tablaProductos, Productos, setProductos, handleBusqueda}
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