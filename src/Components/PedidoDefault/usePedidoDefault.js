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
        const aux = [...datos]
        for(let i =0; i < aux.length; i++){
            if(Object.keys(aux[i]).some(x => x == e.target.name)){
                aux[i][e.target.name] = e.target.value
                //console.log(aux[i])
            }
        }
        console.log(aux)
        setDatos(aux)
    }
    

    return { handleChangeProductsDaily, reqProducts , datos}
}