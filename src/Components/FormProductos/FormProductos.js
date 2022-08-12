import React, {useState} from 'react'
import { Success } from '../Buttons/Buttons'
import { useParams } from 'react-router';
import Popup from '../Popup/Popup';
import * as yup from "yup";
import './FormProductos.css';

const FormProductos = ({data}) => {
    const parameter = useParams()
    const [formData, setformData] = useState({
        "K_Producto": Number(data.K_Producto),
        "Nombre": `${data.Nombre}`,
        "Precio": `${data.Precio}`,
        "B_Activo": Number(data.B_Activo)
    })


    let Schema = yup.object().shape({
        Nombre: yup.string().required('campo obligatorio'),
        Precio: yup.number().required('campo obligatorio').min(0)
      });

    const productUpdate = (e) => { 
        e.preventDefault()
        const validacion = Schema.isValid(formData)
        if(validacion){ 
          console.log(JSON.stringify(formData))
          fetch('http://api-rest-sist-periodico.deversite.com/api/producto',{
          method: 'POST', 
          body: JSON.stringify(formData),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        }
        else{

        }
    }

    //Registro de cambios segun el input
    const handleChange = (e) => {
        setformData({
          ...formData,
          [e.target.name]: e.target.value
        })
        console.log(formData)
      }

    return (
        <div className='container'>
            <form className='formProducto' onSubmit={productUpdate} onChange={handleChange}>
                <div className='formProductoContent d-50'>
                    <label>Nombre</label>
                    <input type="text" name="Nombre" defaultValue={data.Nombre}/>
                </div>
                <div className='formProductoContent d-50'>
                    <label>Precio</label>
                    <input type="text" name="Precios" defaultValue={data.Precio}/>
                </div>
                <div className='formProductoContent d-50'>
                </div>
                <div className='formProductoContent d-50 end'>
                <Success Text="Guardar" />
                </div>
            </form>
        </div>
    )
}

export default FormProductos