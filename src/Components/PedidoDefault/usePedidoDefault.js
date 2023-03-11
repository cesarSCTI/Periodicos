import { useState, useEffect} from 'react'



export const usePedidoDefault = () => {

    const [datos, setDatos] = useState([])
    const [Productos, setProductos] = useState(datos)

    //request
    const reqProducts = async (ClienteID) => {
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/clientes/productos_dia/${ClienteID}`)
        const data = await response.json().finally()
        setDatos(data)
    }

    //handle
    const handleChangeProductsDaily = (e) => {
        setDatos({ 
            ...datos, 
            [e.target.name]: e.target.value 
        })
        console.log(datos)
    }

    return { handleChangeProductsDaily, reqProducts , datos}
}