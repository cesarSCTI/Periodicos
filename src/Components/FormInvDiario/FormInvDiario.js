import React from 'react'
import { Success } from '../Buttons/Buttons'
import './FormInvDiario.css'

const FormInvDiario = ({data, cambio, enviar}) => {
  return (
    <div className='container'>
         <form className='formInv' onChange={cambio} onSubmit={enviar}>
         {
            data.map((ele) => 
            <div className='spaceProduct' >
                <input type="text" name={ele.Nombre} defaultValue={ele.Nombre} disabled />
                <input type="number" name={ele.K_Producto} defaultValue={0}/>
            </div>
            )
         }
         
             <Success Text="Guardar" />
         </form>
    </div>
  )
}

export default FormInvDiario