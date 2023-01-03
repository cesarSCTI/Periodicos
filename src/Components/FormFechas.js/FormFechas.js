import React from 'react'
import {Success} from '../Buttons/Buttons'
import './FormFechas.css'

const FormFechas = ({enviar, cambiar}) => {
  return (
        <form className="formList" onSubmit={enviar} onChange={cambiar}>
            <input type="date" className="input" name='date1'/>
            <input type="date" className="input" name='date2'/>
            <Success Text="Guardar" />
        </form>
       
  )
}

export default FormFechas