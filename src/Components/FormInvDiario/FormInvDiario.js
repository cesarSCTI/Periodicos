import axios from 'axios';
import React from 'react'
//import { URLSearchParams } from 'url';
import { Success } from '../Buttons/Buttons'
import './FormInvDiario.css'
import { useParams, useNavigate } from 'react-router';

const FormInvDiario = () => {
    const navigate = useNavigate()
    var inv = [
        {
            'K_Producto': '17',
            "Cantidad":"200"
        },
        {
            "K_Producto": "11",
            "Cantidad":"250"
        },
        {
            "K_Producto": "20","Cantidad":"125"
        }
    ];

    const inventario = (e) =>{
        e.preventDefault()
        console.log(inv)
        axios.post("https://api-rest-sist-periodico.deversite.com/inventario_dia",JSON.stringify(inv),{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
              }
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          /*
          .finally(
            ()=>{
                navigate("../productos", { replace: true });
              }
          )
          */
    }
  return (
    <div className='container'>
         <form className='formInv' onSubmit={inventario}>
         <div className='spaceProduct'>
             <p>Informador</p>
             <input type="text" />
         </div>
         <div className='spaceProduct'>
             <p>Occidental</p>
             <input type="text" />
         </div>
         <div className='spaceProduct'>
             <p>Milenio</p>
             <input type="text" />
         </div>
         <div className='spaceProduct'>
             <p>Metro</p>
             <input type="text" />
         </div>
         <div className='spaceProduct'>
             <p>Mural</p>
             <input type="text" />
         </div>
         <div className='spaceProduct'>
             <p>NTR</p>
             <input type="text" />
         </div>
         <div className='spaceProduct'>
             <p>Hola</p>
             <input type="text" />
         </div>
             <Success Text="Guardar" />
         </form>
    </div>
  )
}

export default FormInvDiario