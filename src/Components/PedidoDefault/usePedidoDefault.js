import { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { object } from 'yup'


export const usePedidoDefault = () => {

    const [Datos, setDatos] = useState([])
    //const [Productos, setProductos] = useState(Datos)
    const navigate = useNavigate();
    const parameter = useParams()

    //request
    const reqProducts = async (ClienteID) => {
        const response = await fetch(`https://api-rest-sist-periodico.deversite.com/clientes/productos_dia/${ClienteID}`)
        const data = await response.json().finally()
        setDatos(data)
    }

    //handle
    const handleChangeProductsDaily = (e) => {
        var aux = [...Datos]
        for(let i = 0; i < Datos.length; i++){
            if(Object.keys(Datos[i]).some(x => x == e.target.name)){
                Datos[i][e.target.name] = e.target.value;
            }
        }

        console.log("handle")
        console.log(Datos)
        setDatos(Datos)
        
        /*aux.map((ele) => {
            if (Object.keys(ele).some(x => x == e.target.name)) {
                ele[e.target.name] = e.target.value
            }
            else {
               setDatos(...aux);
            }
        })*/
        //console.log(Datos)
    }
    
    //Post
    const Envio = (e) => {
        e.preventDefault()
        console.log("Envio")
        console.log(Datos)
        axios.post(`https://api-rest-sist-periodico.deversite.com/cliente/actualizar_productos_dias/${parameter.id}`, Datos, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function (response) {
            console.log('response ' + JSON.stringify(response));
            if (response.status == 200) {
              console.log("se envio correctamente")
              navigate(-1, { replace: true });
              //return true
            }
          })
          .catch(function (error) {
            console.log(error)
          })
          //navigate(-1, { replace: true });
      }

    return { handleChangeProductsDaily, reqProducts , Datos, Envio, setDatos}
}