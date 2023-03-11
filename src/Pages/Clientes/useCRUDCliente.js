import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router'
import * as yup from "yup";

export const useCRUDCliente = () =>{
    const parameter = useParams()
    const [Cliente, setCliente] = useState({
        "K_Cliente":0,
        "Nombre":"",
        "Apellidos":"",
        "Telefono":"",
        "Direccion":"",
        "Adeudo":0,  
    })
    const [isLoading, setIsloading] = useState(true)
    const [sureDelete, setSureDelete] = useState(false)
    const navigate = useNavigate()

  //openPOPUP DELETE
  const openPOPUP = () =>{
    setSureDelete(!sureDelete)
    console.log(sureDelete)
  }
  //DELETE
   const deleteCliente = () =>{

      axios.post(`https://api-rest-sist-periodico.deversite.com/api/eliminar_cliente/${parameter.id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(()=>{
        navigate("../clientes", { replace: true });
      });
   } 

    //GET 
    const requestCliente = async ()=>{
      
        const response= await fetch(`https://api-rest-sist-periodico.deversite.com/clientes/${parameter.id}`)
        const data = await response.json().finally()
        setCliente(data[0])
        setIsloading(false)
      
    }

    //POST
    let Schema = yup.object().shape({
        K_Cliente: yup.number(),
        Nombre: yup.string().required('campo obligatorio'),
        Apellidos: yup.string().required('campo obligatorio'),
        Telefon: yup.number().max(10),
        Direccion: yup.string().required('campo obligatorio'),
        Adeudo: yup.number().min(0)
      });

    const ClienteUpdate = (e) => { 
        e.preventDefault()
        const validacion = Schema.isValid(Cliente)

        if(validacion){ 
          //AXIOS      
          axios.post(" https://api-rest-sist-periodico.deversite.com/api/cliente", new URLSearchParams(Cliente),{
            headers:{
              'Content-Type': 'application/x-www-form-urlencoded'
            }} )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        else{
          
        }
        setTimeout(()=>{
          navigate("../clientes", { replace: true });
        },2000)
        
    }

    //Registro de cambios segun el input
    //y al mismo tiempo rectificamos el tipo de dato
    const handleChange = (e) => {
        setCliente({
          ...Cliente,
          [e.target.name]: e.target.value,
          K_Cliente : Number(Cliente.K_Cliente),
          Adeudo: Number(Cliente.Adeudo),
          B_Activo: Number(Cliente.B_Activo)
        })

        console.log(Cliente)
      }



   /* useEffect(()=>{
        requestCliente()
    },[])
*/
    return {Cliente, isLoading, parameter, ClienteUpdate, handleChange, deleteCliente, requestCliente, sureDelete, openPOPUP}
}