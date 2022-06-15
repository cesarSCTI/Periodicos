import React from 'react'
import { Success } from '../Buttons/Buttons'
import './FormInvDiario.css'

const FormInvDiario = () => {
  return (
    <div className='container'>
         <form className='formInv'>
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