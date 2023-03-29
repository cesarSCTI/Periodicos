import React from 'react'
import { Success } from '../Buttons/Buttons'
import './FormInvDiario.css'

const FormInvDiarioActual = ({data, cambio, enviar, exist}) => {
  return (
    <div className='container'>
         <form className='formInv' onChange={cambio} onSubmit={enviar}>
         {
            data.map((ele) => 
            <div className='spaceProduct' key={ele.K_Producto}>
                <input type="text" name={ele.D_Producto} defaultValue={ele.D_Producto} disabled />
                <input type="number" name={ele.K_Producto} defaultValue={ele.Cantidad} disabled/>
            </div>
            )
         }
         </form>
    </div>
  )
}

export default FormInvDiarioActual